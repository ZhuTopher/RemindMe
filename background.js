var reminders = [];

function compare(a, b) {
	if (a < b)
		return -1;
	else if (a > b)
		return 0;
	else
		return 0;
}

function addReminder (t, m) {
	reminders.push({time: t, message: m});
	reminders.sort(compare);
}

function save() {
	chrome.storage.sync.set({'reminders': reminders});
}

function load() {
	chrome.storage.local.get('reminders', function (result) {
		reminders = result;
	});
}

function alertMessage() {
	alert(reminders[0].message);
}

var currentDate = new Date();
alert(Math.abs(currentDate.getTime() - reminders[0].time.getTime()));
setTimeout(alertMessage, Math.abs(currentDate.getTime() - reminders[0].time.getTime()));