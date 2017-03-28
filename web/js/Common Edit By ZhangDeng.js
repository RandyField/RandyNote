 $(function (){
				//前台中input 
				$("input['name=number']").keyup(function(){
					replaceNumber(this);
				});

				function replaceNumber(input) {
						//必须保证第一个为数字而不是0
						input.value = input.value.replace(/^0/g, "");
						//先把非数字的都替换掉，除了数字
						input.value = input.value.replace(/[^0-9]/g, "");
				}
				
				//获取结束时间
				function ShowLastDate() {
					//获取日期范围-按天-按月-按周-按季度-按半年-按年
					var cycle = $("#cycleType").val();

						//按天
						if (cycle == "1") {
							if ($("#txtStartTime").val() != "") {
								$("#txtEndTime").val($("#txtStartTime").val());
							}
						}

						//按月
						if (cycle == "2") {
							if ($("#txtStartTime").val() != "") {
								var dateStr = $("#txtStartTime").val();
								var d = new Date(strConvertToPara(dateStr)[0] - 0, strConvertToPara(dateStr)[1] - 1, strConvertToPara(dateStr)[2] - 0);
								if (d.getMonth() == 11) {
									$("#txtEndTime").val(d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + 31);
									return;
								}
								d.setMonth(d.getMonth() + 1);
								d.setDate(0);
								if (d.getMonth() + 1 > 9) {
									$("#txtEndTime").val(d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate());
								}
								else {
									$("#txtEndTime").val(d.getFullYear() + "-0" + (d.getMonth() + 1) + "-" + d.getDate());
								}

							}
						}

						//按周
						if (cycle == "3") {
							if ($("#txtStartTime").val() != "") {
								var dateStr = $("#txtStartTime").val();
								var d = new Date(strConvertToPara(dateStr)[0] - 0, strConvertToPara(dateStr)[1] - 1, strConvertToPara(dateStr)[2] - 0);
								$("#txtEndTime").val(AddOrMinusDate(d, 6));
							}
						}

						//按季度
						if (cycle == "4") {
							if ($("#txtStartTime").val() != "") {
								var dateStr = $("#txtStartTime").val();
								var d = new Date(strConvertToPara(dateStr)[0] - 0, strConvertToPara(dateStr)[1] - 1, strConvertToPara(dateStr)[2] - 0);
								if (d.getMonth() == 0) {
									$("#txtEndTime").val(d.getFullYear() + "-" + "03" + "-" + "31");
								}
								if (d.getMonth() == 3) {
									$("#txtEndTime").val(d.getFullYear() + "-" + "06" + "-" + "30");
								}
								if (d.getMonth() == 6) {
									$("#txtEndTime").val(d.getFullYear() + "-" + "09" + "-" + "30");
								}
								if (d.getMonth() == 9) {
									$("#txtEndTime").val(d.getFullYear() + "-" + "12" + "-" + "31");
								}
							}
						}

						//按半年度
						if (cycle == "5") {
							if ($("#txtStartTime").val() != "") {
								var dateStr = $("#txtStartTime").val();
								var d = new Date(strConvertToPara(dateStr)[0] - 0, strConvertToPara(dateStr)[1] - 1, strConvertToPara(dateStr)[2] - 0);
								if (d.getMonth() == 0) {
									$("#txtEndTime").val(d.getFullYear() + "-" + "06" + "-" + "30");
								}                   
								if (d.getMonth() == 6) {
									$("#txtEndTime").val(d.getFullYear() + "-" + "12" + "-" + "31");
								}                  
							}
						}

						//按年度
						if (cycle == "6") {
							if ($("#txtStartTime").val() != "") {
								var dateStr = $("#txtStartTime").val();
								var d = new Date(strConvertToPara(dateStr)[0] - 0, strConvertToPara(dateStr)[1] - 1, strConvertToPara(dateStr)[2] - 0);
								if (d.getMonth() == 0) {
									$("#txtEndTime").val(d.getFullYear() + "-" + "12" + "-" + "31");
								}                 
							}
						}

					}

					//日期加减法
					function AddOrMinusDate(date, days) {
						var d = new Date(date);
						if(days>0)
						{
							d.setDate(d.getDate() + days);
						}
						else if(days<0)
						{
							d.setDate(d.getDate() - days*(-1));
						}
						
						//获取当前日期
						else
							d.setDate(d.getDate());
						
						var month = d.getMonth() + 1;
						var day = d.getDate();
						if (month < 10) {
							month = "0" + month;
						}
						if (day < 10) {
							day = "0" + day;
						}
						var val = d.getFullYear() + "-" + month + "-" + day;
						return val;
					}

					function strConvertToPara(dateStr) {
						var dateArray = dateStr.split('-');
						return dateArray;
					}
}