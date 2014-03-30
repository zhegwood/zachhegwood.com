			function handleFiles(files) {
				if (window.FileReader) {
					// FileReader are supported.
					getCSVText(files[0]);
				} else {
					alert('FileReader are not supported in this browser.');
				}
			}
			
			function getCSVText(file){
				var reader = new FileReader();
				// Read file into memory as UTF-8      
				reader.readAsText(file);
				// Handle errors load
				reader.onload = loadHandler;
				reader.onerror = errorHandler;
			}
			
			function loadHandler(e){
				var csv = e.target.result;
				buildArray(csv);
			}
			
			function errorHandler() {
				alert("Couldn't get csv.");
			}
			
			function buildArray(csv) {
				var rows = csv.split("\r\n"),
					a, len = rows.length, row;
				for (a = 0; a < len; a++) {
					row = rows[a],
					values = row.split(",");
					if (a === 0) { //do header manipulation
						
					} else {
						manipulateDate(row);
					}
				}
				
				//do your array manipulation here
				buildDownloadLink(csv);
			}
			
			function buildDownloadLink(csv) {
				var a = document.createElement('a');
				
				a.href = 'data:attachment/csv,' + csv;
				a.target = '_blank';
				a.download = 'new_file.csv';
				
				document.body.appendChild(a);
				a.click();
			}