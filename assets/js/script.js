function uzmi_datum(){
	datum = new Date();
	mjesec = datum.getMonth()+1;
	dan = datum.getDate();
	if(mjesec < 10){mjesec = "0"+mjesec};
	if (dan < 10){dan = "0"+dan};
	$(".datum").text(`${dan}.${mjesec}.2022`)
}

$(".igraci_btn").on("click",function(){
	$(".lista_igraca").show("fast")
})
$(".sakriji").on("click",function(){
	$(".lista_igraca").hide("fast")
})

/*------------------------*/
function hover(num){
	$("#ping_num").text(String(num)+" MS")
}
uzmi_datum()