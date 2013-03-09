/* This file holds the majority of the functionality for creating a
 * new notification in our Universal Inbox.
 */

var hubNotify = {

	send : function( title, type ) {
		var options = '';
		if (type == 'expense') {
			options = {				
				body : '<u>WorkFlow Expense Request</u><br/><br/>Please approve my expense for:<br/><br/>$1349.32<br><br><b>-Employee ABC</b>',
				target : 'com.goworkflow',
				targetAction : 'bb.action.OPEN',
				payload : 'Expense, 1349.32, Employee ABC',
				payloadType : 'text/html'
			}			
		} else if (type == 'vacation') {
			options = {
				body : '<u>WorkFlow Vacation Request</u><br/><br/>Please approve my vacation from:<br/><br/><b>Mon 11/21/2013</b> through<br/><b>Fri 11/24/2013</b>. <br><br><b>-Employee CBA</b>',
				target : 'com.goworkflow',
				targetAction : 'bb.action.OPEN',
				payload : 'Vacation, date1: monday, date2: friday, Employee CBA',
				payloadType : 'text/html'
			}
		} else {
			alert('Error!');
		}

		/* Create a new notiication and fire it off */
		var notification = new Notification(title, options);
	}
};
