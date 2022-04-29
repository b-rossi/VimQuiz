var commandKeys = [
	{
		"Key Binding": ":h",
		"Action": "Open help page"
	},
	{
		"Key Binding": ":w",
		"Action": "Save file without quitting"
	},
	{
		"Key Binding": ":wq",
		"Action": "Save file and quit Vim"
	},
	{
		"Key Binding": ":q",
		"Action": "Quit Vim"
	},
	{
		"Key Binding": ":q!",
		"Action": "Quit Vim without saving"
	},
	{
		"Key Binding": ":wqa",
		"Action": "Write and quit all tabs"
	},
	{
		"Key Binding": ":w !sudo tee %",
		"Action": "Write file as sudo"
	},
	{
		"Key Binding": ":e file",
		"Action": "Edit file"
	},
	{
		"Key Binding": ":tabe file",
		"Action": "Open file in new tab"
	},
	{
		"Key Binding": "gt",
		"Action": "Move to next tab"
	},
	{
		"Key Binding": "gT",
		"Action": "Move back a tab"
	},
	{
		"Key Binding": "u",
		"Action": "Undo"
	},
	{
		"Key Binding": "Ctrl + r",
		"Action": "Redo"
	},
	{
		"Key Binding": ".",
		"Action": "Repeat last command"
	},
	{
		"Key Binding": "/text",
		"Action": "Search for text"
	},
	{
		"Key Binding": "n",
		"Action": "Move search Actions forward"
	},
	{
		"Key Binding": "N",
		"Action": "Move search Actions backwards"
	},
	{
		"Key Binding": ":%s/text/newtext/g",
		"Action": "Substitute text with newtext trough the file"
	},
];

var movementKeys = [
	{
		"Key Binding": "h",
		"Action": "Move left"
	},
	{
		"Key Binding": "l",
		"Action": "Move right"
	},
	{
		"Key Binding": "j",
		"Action": "Move down"
	},
	{
		"Key Binding": "k",
		"Action": "Move up"
	},
	{
		"Key Binding": "10j",
		"Action": "Move down 10 times"
	},
	{
		"Key Binding": "10l",
		"Action": "Move right 10 times"
	},
	{
		"Key Binding": "w",
		"Action": "Move forwards by one word"
	},
	{
		"Key Binding": "e",
		"Action": "Move forwards to end of the word"
	},
	{
		"Key Binding": "b",
		"Action": "Move back by one word"
	},
	{
		"Key Binding": "ge",
		"Action": "Move back to start of the word"
	},
	{
		"Key Binding": "0",
		"Action": "Move to start of the line"
	},
	{
		"Key Binding": "$",
		"Action": "Move to end of the line"
	},
	{
		"Key Binding": "gg",
		"Action": "Move to start of the file"
	},
	{
		"Key Binding": "G",
		"Action": "Move to end of the file"
	},
	{
		"Key Binding": "10G or 10gg",
		"Action": "Move to line 10 of the file"
	},
	{
		"Key Binding": "}",
		"Action": "Move to next function"
	},
	{
		"Key Binding": "{",
		"Action": "Move to previous function"
	},
	{
		"Key Binding": "zz",
		"Action": "Center cursor"
	},
];

var insertKeys = [
	{
		"Key Binding": "i",
		"Action": "Enter Insert mode"
	},
	{
		"Key Binding": "I",
		"Action": "Enter Insert mode in start of the line"
	},
	{
		"Key Binding": "cw",
		"Action": "Delete word and enter Insert mode"
	},
	{
		"Key Binding": "cc",
		"Action": "Delete line and enter Insert mode"
	},
	{
		"Key Binding": "r",
		"Action": "Replace character"
	},
	{
		"Key Binding": "R",
		"Action": "Replace multiple characters, quit using ESC"
	},
];

var visualKeys = [
	{
		"Key Binding": "v",
		"Action": "Enter visual mode"
	},
	{
		"Key Binding": "V",
		"Action": "Enter visual line selection mode"
	},
	{
		"Key Binding": "Ctrl + v",
		"Action": "Enter visual block mode (select vertically)"
	},
	{
		"Key Binding": ">",
		"Action": "Shift right"
	},
	{
		"Key Binding": "<",
		"Action": "Shift left"
	},
	{
		"Key Binding": "y",
		"Action": "Copy marked area"
	},
	{
		"Key Binding": "d",
		"Action": "Delete marked area"
	},
	{
		"Key Binding": "u",
		"Action": "Change area to lowercase"
	},
	{
		"Key Binding": "U",
		"Action": "Change area to uppercase"
	},
	{
		"Key Binding": "ESC",
		"Action": "Exit visual mode"
	},
];

var copyKeys = [
	{
		"Key Binding": "yy",
		"Action": "Yank(copy) line"
	},
	{
		"Key Binding": "yw",
		"Action": "Yank word"
	},
	{
		"Key Binding": "Y",
		"Action": "Yank to end of line"
	},
	{
		"Key Binding": "x",
		"Action": "Delete(cut) character"
	},
	{
		"Key Binding": "dw",
		"Action": "Delete(cut) word"
	},
	{
		"Key Binding": "dd",
		"Action": "Delete(cut) line"
	},
	{
		"Key Binding": "10dd",
		"Action": "Delete(cut) 10 lines"
	},
	{
		"Key Binding": "D",
		"Action": "Delete(cut) to end of line"
	},
	{
		"Key Binding": "p",
		"Action": "Paste"
	},
	{
		"Key Binding": "P",
		"Action": "Paste before cursor"
	},
];

function printTable(data) {
var keys = [];

document.write("<table border==\"1\"><tr>");
for (key in data[0]) {
	document.write('<td>' + key + '</td>');
}

document.write("</tr>");
for (var i = 0; i < data.length; i++) {
	document.write('<tr>');
	for (key in data[i]) {
			document.write('<td>' + data[i][key] + '</td>');
	}
	document.write('</tr>');
	}
	document.write("</table>");
}

document.write("<h2>Commands</h2>");
printTable(commandKeys);

document.write("<h2>Movement</h2>");
printTable(movementKeys);

document.write("<h2>Insert</h2>");
printTable(insertKeys);

document.write("<h2>Visual Mode</h2>");
printTable(visualKeys);

document.write("<h2>Copy and paste</h2>");
printTable(copyKeys);
