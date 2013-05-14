/* This file holds the majority of the functionality for creating a
 * new notification in our Universal Inbox.
 */

var hubNotify = {

	send : function(title, type) {
		var options = '';
		if (type == 'expense') {
			options = {
				body : "WorkFlow - Expense Request\n\n\nExpense $1349.32,\nEmployee: Sebastian Barthelmess\n\n\n\nopen to approve / deny...",
				target : 'waa.goWorkflow.open',
				targetAction : 'bb.action.OPEN',
				payload : window.btoa('Travel Expense, 1349.32, Employee ABC'),
				payloadType : 'text/plain'
			}
		} else if (type == 'vacation') {
			options = {
				body : "WorkFlow - Vacation Request\n\n\nEmployee CBA\nRequesting 2 weeks off in December.\n\n\n\nopen to approve / deny...",
				target : 'waa.goWorkflow.open',
				targetAction : 'bb.action.OPEN',
				payload : window.btoa('Vacation, date1: monday, date2: friday, Employee CBA'),
				payloadType : 'text/plain'
			}
		} else {
			options = {
				body : 'WorkFlow - WebApp Integration',
				target : "sys.browser",
				targetAction : "bb.action.OPEN",
				payloadType : "text/html",
				payloadURI : "http://lmgtfy.com?q=BlackBerry%Live!%"
			}

		}

		/* Create a new notiication and fire it off */
		var notification = new Notification(title, options);
	}
};
