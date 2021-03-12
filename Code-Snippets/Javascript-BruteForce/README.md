# JavaScript-BruteForce

This is a simple brute force using JavaScript<br>
You can try this script with <b>Chrome DevTools/JavaScript Console</b><br>
The Default Charset is "0123456789abcdefghijklmnopqrstuvwxyz"(<b>Base 36</b>)<br>
in this example we set <b>min string length</b> to 1 (start from '0') and <b>max string length</b> to 2 (until 'zz')<br>
and console log once we have reached 'zz'<br>
Simply copy and paste this script into <b>JavaScript Console</b>:<br>
<code>for(i=parseInt("0", 36);i++<=parseInt("zz", 36);) {
	if (i.toString(36) == 'zz') {
		console.log(i.toString(36))
	};
};</code>
