{
"title"       : "I cannot see the Extended Validation Certificate",
"sort"        : "50",
"category"    : "Security & Phishing",
"description" : "Security & Phishing",
"date_published" : "2017-12-28T08:00:00+08:00",
"date_modified"  : "2017-12-28T08:00:00+08:00"
}

---%



On MyEtherWallet(.com) you should be able to see the Extended Validation Certificate (EV SSL) in your  URL bar. However, some anti-virus applications like BitDefender prevent you from seeing the EV SSL. These anti-virus applications essentialy perform a man-in-the-middle attack, simply put it scans all your traffic from and to MyEtherWallet by replacing the original SSL certificate.

Here is what it should look like:

![](../images/security/extended-validation-issue-01.png)

When using BitDefender, you will see something like this:

![](../images/security/extended-validation-issue-02.png)

This can cause a security risk, as you are not able to verify if you are on the right URL. Fortunately, there is a way to solve this, by disabling the SSL scanning feature of your anti-virus application.

### How to disable SSL scanning
If you are using BitDefender, please follow these steps in order to solve the issue:

1. Open BitDefender.
2. Click on `View Features`.
3. Click on the settings icon under the `Web Protection` section.
4. Disable the `Scan SSL` option.

Now, if you restart your browser, you should be able to see the EV SSL on MyEtherWallet.

If you are using another anti-virus application and you are having this issue, the steps should be very similar. Look for web protection settings in the anti-virus configuration and look for something similar to SSL scanning.
