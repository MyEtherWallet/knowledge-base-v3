/*
Title: Ethereum Account Generation & how MyEtherWallet gets Entropy
Sort: 2
*/

*This is part of a series where Taylor pull's sweet comments she's made or found over the years in the hopes that they can be useful, searchable, remembered, referenced, and/or aid in the creation of future knowledge base posts. Many are unpolished & contain typos, specific references to previous discussions or the user, and gratuitous cursing.*

---

http://i.imgur.com/7eO4jiH.jpg

We use the window.crypto method which is a cryptographically secure pseudo-random number generator. It does not matter if you are online or offline (honestly, if you thought that your seeds or keys were being generated on a server somewhere and sent to you, the randomness should not worry you - the fact that your seeds could (would have already been) intercepted at any time would be the problem. Holy shit I can't believe I had to say that.)

**A key will not be generated if this method is not supported by a particular implementation or if something fails during the initialization of the crypto method.** In our opinion, it is more secure to generate a key using only this method instead of adding complexity and opening ourselves up to failures or half-failures by combining different methods of generating randomness. Especially with the range of browsers and OS's today, running tests for every circumstance ever is serious undertaking.

Again: http://i.imgur.com/7eO4jiH.jpg

This avoids situations (see: TrueCrypt) where you think you are happily RNG-ing away with proper entropy (e.g. using the Windows Crypto API + mouse movements) but since the Windows Crypto API actually didn't initialize, you're really only getting entropy from mouse movements. As the TrueCrypt audit stated, "When this happens, Truecrypt
should barf and catch fire. Instead it silently accepts this failure and continues to generate keys." We don't generate keys in that situation, because we avoid that situation entirely. No window.crypto = no key generated.

Let me just say it again: http://i.imgur.com/7eO4jiH.jpg

So really, you're asking what we are using and whether or not that system has enough entropy, even on a new computer. First, here's the W3 spec for the WebCryptoAPI:

> The Crypto interface represents an interface to general purpose cryptographic functionality including a cryptographically strong pseudo-random number generator seeded with truly random values.

> Implementations should generate cryptographically random values using well-established cryptographic pseudo-random number generators seeded with high-quality entropy, such as from an operating-system entropy source (e.g., "/dev/urandom"). This specification provides no lower-bound on the information theoretic entropy present in cryptographically random values, but implementations should make a best effort to provide as much entropy as practicable.

> Note This interface defines a synchronous method for obtaining cryptographically random values. While some devices and implementations may support truly random cryptographic number generators or provide interfaces that block when there is insufficient entropy, implementations are discouraged from using these sources when implementing getRandomValues, both for performance and to avoid depleting the system of entropy. Instead, these sources should be used to seed a cryptographic pseudo-random number generator that can then return suitable values efficiently.

> To guarantee enough performance, implementations are not using a truly random number generator, but they are using a pseudo-random number generator seeded with a value with enough entropy. The PRNG used differs from one implementation to the other but is suitable for cryptographic usages. Implementations are also required to use a seed with enough entropy, like a system-level entropy source.

Source: https://www.w3.org/TR/WebCryptoAPI/#Crypto-method-getRandomValues & https://developer.mozilla.org/en-US/docs/Web/API/RandomSource/getRandomValues

The browser (Chrome, Firefox, Microsoft not-IE<11) have then implemented that spec which partially relies on entropy for the OS.

As far as entropy on your system itself: it's no longer the case that a new computer has little or no entropy. That window has been vastly reduced to very specific times during boot where there is no system activity or the entropy sources are completely unavailable. This obviously doesn't apply here as you have already booted AND already opened your browser. In addition, as described in the spec: "these sources should be used to **seed** a cryptographic pseudo-random number generator that can then return suitable values efficiently".

### Standard methods from where entropy comes from for CSPRNGs:

- Windows: `RtlGenRandom`

- Linux: `getrandom (if available)` or `/dev/urandom (older Linux kernels)`

- OpenBSD: `getentropy()` or `arc4random_buf()` with ChaCha20 (not RC4)

- Other Unix-like (including OS X): `/dev/urandom`

Chrome for example can be found here: https://www.chromium.org/blink/webcrypto

[In Chrome you're looking at  `wtf::cryptographicallyRandomValues()` directly calls `Platform::current()->cryptographicallyRandomValues()` which then calls `crypto::RandBytes()` and/or `base::RandBytes()`:](https://chromium.googlesource.com/chromium/src/third_party/WebKit/Source/wtf/+/master/CryptographicallyRandomNumber.cpp). An explanation on the "and/or" above is found in the source

-   `// This should really be crypto::RandBytes(), but WTF can't depend on crypto.`
-   `// The implementation of crypto::RandBytes() is just calling`
-   `// base::RandBytes(), so both are actually same.`

and then ...

> "So, when RDRAND isn't available, RAND_bytes is literally just reading from /dev/urandom (or RtlGenRandom on Windows) anyway.

> (When RDRAND is available, it's a little more complex. It's RDRAND xor a urandom-seeded thread-local ChaCha20 stream, refreshed every N calls or M bytes for some N and M. But that's mostly for performance.)"

So on windows we're looking at [RtlGenRandom](https://msdn.microsoft.com/en-us/library/windows/desktop/aa387694(v=vs.85).aspx) (which will be CyrptGenRandom at some point.) CryptGenRandom is based on RtlGenRandom but we don't really know what the differences are.  But we do know more about how RtlGenRandom works:

> RtlGenRandom generates as specified in [FIPS 186-2 appendix 3.1](http://csrc.nist.gov/publications/fips/archive/fips186-2/fips186-2.pdf) with SHA-1 as the G function. And with entropy from:

> The current process ID (GetCurrentProcessID).

> The current thread ID (GetCurrentThreadID).

> The tick count since boot time (GetTickCount).

> The current time (GetLocalTime).

> Various high-precision performance counters (QueryPerformanceCounter).

> An MD4 hash of the user's environment block, which includes username, computer name, and search path.

> High-precision internal CPU counters, such as RDTSC, RDMSR, RDPMC

> [omitted: long lists of low-level system information fields and performance counters]

So you should be fine. Except for the whole "well what is FIPS and how do I know if what is specified in there is good or not?"

FIPS are federal standards and this one is the standard for generating random numbers. This is where it gets really fun! There are all sorts of drama (understatement of the year) around these things as they involve a bunch of federal assholes who have ulterior motives (like backdooring the world). NIST SP 800-90A is another one of these similar standards / specs that was widely followed and, as the NSA created some pieces which were then included in the NIST SP 800-90A, of course there is a backdoor written into the standard. So, buckle up for some good ol' cyprtographic drama if you click this link regarding NIST SP 800-90A: https://en.wikipedia.org/wiki/NIST_SP_800-90A.

**Anyways. In summation:**

**The good news is is that we're relying on things that really really smart groups of people to build and maintain how our keys are generated. There are glorious amount of specs (and even specs about testing those specs). The bad news is...if something in the above fail spectacularly, your insecurely generated ETH wallet is going to be the least of the world's issues.**

**Furthermore, I personally don't believe that anything is this world is secure, but you're still much more likely to lose your key or forget your password or have your house burn down. So, don't lose too much sleep over whether or not the Windows implementation of the (inset-prefixes-here)RNG is truly a (inset-prefixes-here)RNG or not... or whether the NSA is watching you. There are other steps you need to take to safeguard your keys first...and yes, they are.**

---

### Source

- [https://www.reddit.com/r/ethereum/comments/5psp13/ethereum_account_generation_on_airgapped_computer/](https://www.reddit.com/r/ethereum/comments/5psp13/ethereum_account_generation_on_airgapped_computer/)
