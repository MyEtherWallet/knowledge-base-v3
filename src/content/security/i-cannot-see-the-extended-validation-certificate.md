{
"title"       : "I cannot see the Extended Validation Certificate",
"sort"        : "50",
"category"    : "Security & Phishing",
"description" : "Security & Phishing",
"date_published" : "2017-12-28T08:00:00+08:00",
"date_modified"  : "2017-12-28T08:00:00+08:00"
}

---%


<p id="icstevc_p1">
  On MyEtherWallet(.com) you should be able to see the Extended Validation Certificate (EV SSL) in your  URL bar. However, some anti-virus applications like BitDefender prevent you from seeing the EV SSL. These anti-virus applications essentialy perform a man-in-the-middle attack, simply put it scans all your traffic from and to MyEtherWallet by replacing the original SSL certificate.
</p>
<p id="icstevc_p2">
  Here is what it should look like:
</p>
<div id="icstevc_img1">
  <img src="../images/security/extended-validation-issue-01.png" />
</div>
<p id="icstevc_p3">
  When using BitDefender, you will see something like this:
</p>
<div id="icstevc_img2">
  <img src="../images/security/extended-validation-issue-02.png" />
</div>
<p id="icstevc_p4">
  This can cause a security risk, as you are not able to verify if you are on the right URL. Fortunately, there is a way to solve this, by disabling the SSL scanning feature of your anti-virus application.
</p>

### How to disable SSL scanning
<p id="icstevc_p5">
  If you are using BitDefender, please follow these steps in order to solve the issue:
</p>

<ol>
  <li id="icstevc_l1">Open BitDefender.</li>
  <li id="icstevc_l2">Click on <code>View Features</code>.</li>
  <li id="icstevc_l3">Click on the settings icon under the <code>Web Protection</code> section.</li>
  <li id="icstevc_l4">Disable the <code>Scan SSL</code> option.</li>
</ol>

<p id="icstevc_p6">
  Now, if you restart your browser, you should be able to see the EV SSL on MyEtherWallet.
</p>

<p id="icstevc_p7">
  If you are using another anti-virus application and you are having this issue, the steps should be very similar. Look for web protection settings in the anti-virus configuration and look for something similar to SSL scanning.
</p>
