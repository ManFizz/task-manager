const options = {year: 'numeric', month: 'numeric', day: 'numeric'};
const Utils = {
	 FormatDate(date) {
		 if(date instanceof Date)
			 return date.toLocaleDateString('ru-RU', options);
		return (new Date(date)).toLocaleDateString('ru-RU', options);
	}
}

export default Utils;