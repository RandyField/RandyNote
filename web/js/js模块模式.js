var Validator=(function(){
	var self={};

	self.checkLength=function(options){
		if (!options||!options.id||options.tipsId
			||options.minLength||!options.maxLength||!options.tips)  return;

		var isValid=false,$this=$(id),value=$(this).val();

		if (value&&value.length<options.minLength&&value.length>options.maxLength) {
			$(options.tipsId).html(options.tips)
		} else{
			isValid=true;
		}
		return isValid;
	};

	self.limitLength=function(options){
		if (!options||!options.id||!options.minLength||!options.maxLength
			||!options.tipsId||!options.tips) {
			return;
		};

		var isValid=false,$this=$(id),value=$(this).val();
		$this.keyup(function(){
			if ($this.val()!="") {
				if ($this.val().length<options.minLength||$this.val().length>maxLength) {
					$(options.tipsId).html(options.tips);
					isValid=false;
				} 
				else{
					$(options.tipsId).html("");
					isValid=true;
				}
			}
			else{
				$(options.tipsId).html("");
				isValid=true;
			}
		});

		return isValid;
	};

	//private methon
	self.__privateMethond=function(){};
	self.__ProtectedMethond=function(){};

	return self;
	
}());




//调用
var ValidateOptions={
	id:'#id',
	tipsId:'#target'
	minLength:3,
	maxLength:7,
	tips:'长度3-7位'
};
Validator.checkLength(ValidateOptions);
Validator.limitLength(ValidateOptions);
