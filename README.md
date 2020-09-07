# Bookmarklets
Curation of Bookmarklets

Code to create Bookmarklets from http://www.dev-hq.net/posts/1--create-javascript-bookmarklet

Example Bookmark:

`javascript:(function(){s=document.createElement('script');s.type='text/javascript';s.src='http://cdn.jsdelivr.net/gh/<username>/<repo>/path/to/file.js?v='+parseInt(Math.random()*99999999);document.body.appendChild(s);})();`

There *is* a good workaround for this, now, by using [jsdelivr.net][pa].

**Steps**:

1. Find your link on GitHub, and click to the "Raw" version.
2. Copy the URL.
3. Change `raw.githubusercontent.com` to `cdn.jsdelivr.net`
4. Insert `/gh/` before your username.
5. Remove the `branch` name.
5. (Optional) Insert the _version_ you want to link to, as `@version` (if you do not do this, you will get the _latest_ - which may cause long-term caching)

---

**Examples**:

<!-- language-all: none -->

    http://raw.githubusercontent.com/<username>/<repo>/<branch>/path/to/file.js

Use this URL to get the latest version:

    http://cdn.jsdelivr.net/gh/<username>/<repo>/path/to/file.js

Use this URL to get a specific version or commit hash:

    http://cdn.jsdelivr.net/gh/<username>/<repo>@<version or hash>/path/to/file.js

**For production environments**, consider targeting a specific tag or commit-hash rather than the branch. Using the _latest_ link may result in long-term caching of the file, causing your link to not be updated as you push new versions. Linking to a file by commit-hash or tag makes the link unique to version.

---

**Why is this needed?**

In 2013, GitHub started using `X-Content-Type-Options: nosniff`, which instructs more modern browsers to enforce strict MIME type checking. It then returns the raw files in a MIME type returned by the server, preventing the browser from using the file as-intended (if the browser honors the setting).

For background on this topic, please refer to [this discussion thread][qu].

[pa]://www.jsdelivr.com
[qu]://bugs.chromium.org/p/chromium/issues/detail?id=180007
