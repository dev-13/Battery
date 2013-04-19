//Status de la batterie
				function ChargeChange() {
					var chargeNode = document.getElementById("status");
					chargeNode.innerHTML = "Status : " + "<span style='color:" + (info.isPlugged ? "green" : "red") + "'>" +  (info.isPlugged ? " En Charge" : "Décharge") + "</span>";
				
				}
