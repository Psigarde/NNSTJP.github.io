var IDCurr;
var Data;
var DataLink;
var Timeout;
function Start()
	{
		for(var Count = 0; Count < Characters.length; Count ++)
			{
				document.getElementById("SelectCharacter").innerHTML += "<img class='SelectIMG' src='PNG/Character Icon/" + Characters[Count] + ".png' id='" + Characters[Count] + "' onClick='SelectCharacter(this.id)'>";
			}
		for(var Count = 0; Count < Weapons.length; Count ++)
			{
				document.getElementById("SelectWeapon").innerHTML += "<img class='SelectIMG' src='PNG/Weapon Icon/" + Weapons[Count] + ".png' id='" + Weapons[Count] + "' onClick='SelectWeapon(this.id)'>";
			}
		for(var Count = 0; Count < Souls.length; Count ++)
			{
				document.getElementById("SelectSoul").innerHTML += "<img class='SelectIMG' src='PNG/Soul Icon/" + Souls[Count] + ".png' id='" + Souls[Count] + "' onClick='SelectSoul(this.id)'>";
			}
		for(var Count = 0; Count < IdoMags.length; Count ++)
			{
				document.getElementById("SelectIdoMag").innerHTML += "<img class='SelectIMG' src='PNG/IdoMag Icon/" + IdoMags[Count] + ".png' id='" + IdoMags[Count] + "' onClick='SelectIdoMag(this.id)'>";
			}
		Data =
			{
				Party: "01",
				CharacterID: ["100000 00", "100000 00", "100000 00", "100000 00", "100000 00", "100000 00", "100000 00", "100000 00"],
				CharacterLB: ["0", "0", "0", "0", "0", "0", "0", "0"],
				CharacterD: ["0.5", "0.5", "0.5", "0.5", "0.5", "0.5", "0.5", "0.5"],
				CharacterDB: ["0", "0", "0", "0", "0", "0", "0", "0"],
				CharacterTB: ["0", "0", "0", "0", "0", "0", "0", "0"],
				WeaponID: ["200000000", "200000000", "200000000", "200000000", "200000000", "200000000", "200000000", "200000000"],
				WeaponHP: ["0", "0", "0", "0", "0", "0", "0", "0"],
				WeaponATK: ["0", "0", "0", "0", "0", "0", "0", "0"],
				WeaponDEF: ["0", "0", "0", "0", "0", "0", "0", "0"],
				WeaponSPD: ["0", "0", "0", "0", "0", "0", "0", "0"],
				WeaponCRT: ["0", "0", "0", "0", "0", "0", "0", "0"],
				WeaponRES: ["0", "0", "0", "0", "0", "0", "0", "0"],
				SoulID: ["300000000", "300000000", "300000000", "300000000", "300000000", "300000000", "300000000", "300000000"],
				SoulHP: ["0", "0", "0", "0", "0", "0", "0", "0"],
				SoulATK: ["0", "0", "0", "0", "0", "0", "0", "0"],
				SoulDEF: ["0", "0", "0", "0", "0", "0", "0", "0"],
				SoulSPD: ["0", "0", "0", "0", "0", "0", "0", "0"],
				SoulRES: ["0", "0", "0", "0", "0", "0", "0", "0"],
				SoulELE: ["0", "0", "0", "0", "0", "0", "0", "0"],
				SupportSPD: ["0", "0", "0", "0", "0", "0", "0", "0"],
				IdoMagID: ["12700000 00", "12700000 00"],
				IdoMagHP: ["0", "0"],
				IdoMagATK: ["0", "0"],
				IdoMagDEF: ["0", "0"],
				IdoMagSPD: ["0", "0"],
				IdoMagCRT: ["0", "0"],
				IdoMagRES: ["0", "0"],
				IdoMagRED: ["0", "0"],
				IdoMagELE01: ["0", "0"],
				IdoMagELE02: ["0", "0"],
				IdoMagELE03: ["0", "0"],
				IdoMagELE04: ["0", "0"],
				IdoMagEXP: ["0", "0"],
				IdoMagKZN: ["0", "0"],
				IdoMagMST: ["0", "0"],
				IdoMagATK01: ["0", "0"],
				IdoMagATK02: ["0", "0"],
				IdoMagATK03: ["0", "0"],
				IdoMagATK04: ["0", "0"],
				IdoMagDEF01: ["0", "0"],
				IdoMagDEF02: ["0", "0"],
				IdoMagDEF03: ["0", "0"],
				IdoMagDEF04: ["0", "0"],
				IdoMagSPD01: ["0", "0"],
				IdoMagSPD02: ["0", "0"],
				IdoMagSPD03: ["0", "0"],
				IdoMagSPD04: ["0", "0"]
			};
		SelectParty("ID01");
		document.getElementById("SelectCharacterELE00").style.opacity = "1";
		document.getElementById("SelectWeaponRarity00").style.opacity = "1";
		document.getElementById("SelectSoulRarity00").style.opacity = "1";
		LB("ID0101CharacterLB");
		DB("ID0101CharacterDB");
		var DataList = document.createElement("option");
		DataList.text = "NEW SAVE";
		document.getElementById("DataList").options.add(DataList);
		for(var Count = 0; Count < localStorage.length; Count ++)
			{
				var DataList = document.createElement("option");
				DataList.text = localStorage.key(Count);
				document.getElementById("DataList").options.add(DataList);
			}
		DataChange();
		document.getElementById("Loading").style.opacity = "0";
		document.getElementById("LoadingText").style.opacity = "0";
		setTimeout(function() { document.getElementById("Loading").style.display = "none"; }, 1000);
		if(document.location.href.indexOf("?") != -1)
			{
				DataLink = document.location.href.substring(document.location.href.indexOf("?") + 1);
				var DataLoad = JSON.parse(decodeURI(DataLink));
				if(DataLoad.Party) { SelectParty("ID" + DataLoad.Party); }
				for(var Count01 = 1; Count01 < 3; Count01 ++)
					{
						for(var Count02 = 1; Count02 < 5; Count02 ++)
							{
								IDCurr = "0" + Count01 + "0" + Count02;
								if(DataLoad.CharacterID) { SelectCharacter(DataLoad.CharacterID[(Count01 == 1) ? Count02 - 1 : Count02 + 3]); }
								if(DataLoad.CharacterLB) { document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterLB").value = DataLoad.CharacterLB[(Count01 == 1) ? Count02 - 1 : Count02 + 3]; }
								if(DataLoad.CharacterD) { document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterD").style.opacity = DataLoad.CharacterD[(Count01 == 1) ? Count02 - 1 : Count02 + 3]; }
								if(DataLoad.CharacterDB) { document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterDB").value = DataLoad.CharacterDB[(Count01 == 1) ? Count02 - 1 : Count02 + 3]; }
								if(DataLoad.CharacterTB) { document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTB").value = DataLoad.CharacterTB[(Count01 == 1) ? Count02 - 1 : Count02 + 3]; }
								if(DataLoad.WeaponID) { SelectWeapon(DataLoad.WeaponID[(Count01 == 1) ? Count02 - 1 : Count02 + 3]); }
								if(DataLoad.WeaponHP) { document.getElementById("ID0" + Count01 + "0" + Count02 + "WeaponHP").value = DataLoad.WeaponHP[(Count01 == 1) ? Count02 - 1 : Count02 + 3]; }
								if(DataLoad.WeaponATK) { document.getElementById("ID0" + Count01 + "0" + Count02 + "WeaponATK").value = DataLoad.WeaponATK[(Count01 == 1) ? Count02 - 1 : Count02 + 3]; }
								if(DataLoad.WeaponDEF) { document.getElementById("ID0" + Count01 + "0" + Count02 + "WeaponDEF").value = DataLoad.WeaponDEF[(Count01 == 1) ? Count02 - 1 : Count02 + 3]; }
								if(DataLoad.WeaponSPD) { document.getElementById("ID0" + Count01 + "0" + Count02 + "WeaponSPD").value = DataLoad.WeaponSPD[(Count01 == 1) ? Count02 - 1 : Count02 + 3]; }
								if(DataLoad.WeaponCRT) { document.getElementById("ID0" + Count01 + "0" + Count02 + "WeaponCRT").value = DataLoad.WeaponCRT[(Count01 == 1) ? Count02 - 1 : Count02 + 3]; }
								if(DataLoad.WeaponRES) { document.getElementById("ID0" + Count01 + "0" + Count02 + "WeaponRES").value = DataLoad.WeaponRES[(Count01 == 1) ? Count02 - 1 : Count02 + 3]; }
								if(DataLoad.SoulID) { SelectSoul(DataLoad.SoulID[(Count01 == 1) ? Count02 - 1 : Count02 + 3]); }
								if(DataLoad.SoulHP) { document.getElementById("ID0" + Count01 + "0" + Count02 + "SoulHP").value = DataLoad.SoulHP[(Count01 == 1) ? Count02 - 1 : Count02 + 3]; }
								if(DataLoad.SoulATK) { document.getElementById("ID0" + Count01 + "0" + Count02 + "SoulATK").value = DataLoad.SoulATK[(Count01 == 1) ? Count02 - 1 : Count02 + 3]; }
								if(DataLoad.SoulDEF) { document.getElementById("ID0" + Count01 + "0" + Count02 + "SoulDEF").value = DataLoad.SoulDEF[(Count01 == 1) ? Count02 - 1 : Count02 + 3]; }
								if(DataLoad.SoulSPD) { document.getElementById("ID0" + Count01 + "0" + Count02 + "SoulSPD").value = DataLoad.SoulSPD[(Count01 == 1) ? Count02 - 1 : Count02 + 3]; }
								if(DataLoad.SoulRES) { document.getElementById("ID0" + Count01 + "0" + Count02 + "SoulRES").value = DataLoad.SoulRES[(Count01 == 1) ? Count02 - 1 : Count02 + 3]; }
								if(DataLoad.SoulELE) { document.getElementById("ID0" + Count01 + "0" + Count02 + "SoulELE").value = DataLoad.SoulELE[(Count01 == 1) ? Count02 - 1 : Count02 + 3]; }
								document.getElementById("ID0" + Count01 + "0" + Count02 + "SupportSPD").value = DataLoad.SupportSPD[(Count01 == 1) ? Count02 - 1 : Count02 + 3];
							}
						IDCurr = "0" + Count01;
						if(DataLoad.IdoMagID) { SelectIdoMag(DataLoad.IdoMagID[Count01 - 1]); }
						if(DataLoad.IdoMagHP) { document.getElementById("ID0" + Count01 + "IdoMagHP").value = DataLoad.IdoMagHP[Count01 - 1]; }
						if(DataLoad.IdoMagATK) { document.getElementById("ID0" + Count01 + "IdoMagATK").value = DataLoad.IdoMagATK[Count01 - 1]; }
						if(DataLoad.IdoMagDEF) { document.getElementById("ID0" + Count01 + "IdoMagDEF").value = DataLoad.IdoMagDEF[Count01 - 1]; }
						if(DataLoad.IdoMagSPD) { document.getElementById("ID0" + Count01 + "IdoMagSPD").value = DataLoad.IdoMagSPD[Count01 - 1]; }
						if(DataLoad.IdoMagCRT) { document.getElementById("ID0" + Count01 + "IdoMagCRT").value = DataLoad.IdoMagCRT[Count01 - 1]; }
						if(DataLoad.IdoMagRES) { document.getElementById("ID0" + Count01 + "IdoMagRES").value = DataLoad.IdoMagRES[Count01 - 1]; }
						if(DataLoad.IdoMagRED) { document.getElementById("ID0" + Count01 + "IdoMagRED").value = DataLoad.IdoMagRED[Count01 - 1]; }
						if(DataLoad.IdoMagELE01) { document.getElementById("ID0" + Count01 + "IdoMagELE01").value = DataLoad.IdoMagELE01[Count01 - 1]; }
						if(DataLoad.IdoMagELE02) { document.getElementById("ID0" + Count01 + "IdoMagELE02").value = DataLoad.IdoMagELE02[Count01 - 1]; }
						if(DataLoad.IdoMagELE03) { document.getElementById("ID0" + Count01 + "IdoMagELE03").value = DataLoad.IdoMagELE03[Count01 - 1]; }
						if(DataLoad.IdoMagELE04) { document.getElementById("ID0" + Count01 + "IdoMagELE04").value = DataLoad.IdoMagELE04[Count01 - 1]; }
						if(DataLoad.IdoMagEXP) { document.getElementById("ID0" + Count01 + "IdoMagEXP").value = DataLoad.IdoMagEXP[Count01 - 1]; }
						if(DataLoad.IdoMagKZN) { document.getElementById("ID0" + Count01 + "IdoMagKZN").value = DataLoad.IdoMagKZN[Count01 - 1]; }
						if(DataLoad.IdoMagMST) { document.getElementById("ID0" + Count01 + "IdoMagMST").value = DataLoad.IdoMagMST[Count01 - 1]; }
						//if(DataLoad.IdoMagATK01) { document.getElementById("ID0" + Count01 + "IdoMagATK01").value = DataLoad.IdoMagATK01[Count01 - 1]; }
						//if(DataLoad.IdoMagATK02) { document.getElementById("ID0" + Count01 + "IdoMagATK02").value = DataLoad.IdoMagATK02[Count01 - 1]; }
						//if(DataLoad.IdoMagATK03) { document.getElementById("ID0" + Count01 + "IdoMagATK03").value = DataLoad.IdoMagATK03[Count01 - 1]; }
						//if(DataLoad.IdoMagATK04) { document.getElementById("ID0" + Count01 + "IdoMagATK04").value = DataLoad.IdoMagATK04[Count01 - 1]; }
						//if(DataLoad.IdoMagDEF01) { document.getElementById("ID0" + Count01 + "IdoMagDEF01").value = DataLoad.IdoMagDEF01[Count01 - 1]; }
						//if(DataLoad.IdoMagDEF02) { document.getElementById("ID0" + Count01 + "IdoMagDEF02").value = DataLoad.IdoMagDEF02[Count01 - 1]; }
						//if(DataLoad.IdoMagDEF03) { document.getElementById("ID0" + Count01 + "IdoMagDEF03").value = DataLoad.IdoMagDEF03[Count01 - 1]; }
						//if(DataLoad.IdoMagDEF04) { document.getElementById("ID0" + Count01 + "IdoMagDEF04").value = DataLoad.IdoMagDEF04[Count01 - 1]; }
						if(DataLoad.IdoMagSPD01) { document.getElementById("ID0" + Count01 + "IdoMagSPD01").value = DataLoad.IdoMagSPD01[Count01 - 1]; }
						if(DataLoad.IdoMagSPD02) { document.getElementById("ID0" + Count01 + "IdoMagSPD02").value = DataLoad.IdoMagSPD02[Count01 - 1]; }
						if(DataLoad.IdoMagSPD03) { document.getElementById("ID0" + Count01 + "IdoMagSPD03").value = DataLoad.IdoMagSPD03[Count01 - 1]; }
						if(DataLoad.IdoMagSPD04) { document.getElementById("ID0" + Count01 + "IdoMagSPD04").value = DataLoad.IdoMagSPD04[Count01 - 1]; }
					}
				LB("ID0101CharacterLB");
				DB("ID0101CharacterDB");
			}
	}
function SelectParty(ID)
	{
		for(var Count01 = 1; Count01 < 3; Count01 ++)
			{
				document.getElementById("SelectParty0" + Count01).style.display = (ID == ("ID0" + Count01)) ? "inline" : "none";
			}
		var MainElement = document.getElementsByClassName("MainElement");
		for(var Count = 0; Count < MainElement.length; Count ++)
			{
				MainElement[Count].style.height = (MainElement[Count].id.includes(ID)) ? "37px" : "0px"
			}
		Data.Party = (ID == "ID01") ? "01" : "02";
	}
function SelectCharacterList(ID)
	{
		IDCurr = ID.replace("ID", "").replace("Character", "");
		document.getElementById("SelectCancel").style.display = "inline";
		document.getElementById("SelectCharacterList").style.display = "inline";
		Timeout = setTimeout(function()
			{
				document.getElementById("SelectCancel").style.opacity = "0.5";
				document.getElementById("SelectCharacterList").style.height = "50%";
			}, 1);
		document.getElementById("SelectCharacter").scrollTop = 0;
		SelectCharacterFilter("");
	}
function SelectCharacterFilter(ID)
	{
		if(ID != "")
			{
				for(var Count = 0; Count < 5; Count ++)
					{
						document.getElementById("SelectCharacterELE0" + Count).style.opacity = (ID == ("SelectCharacterELE0" + Count)) ? "1" : "0.5";
					}
			}
		var Select = (["0101", "0102", "0103", "0104"].indexOf(IDCurr) != -1) ? "1" : "2";
		for(var Count = 0; Count < Characters.length; Count ++)
			{
				if(["0", Select].indexOf(Characters[Count].charAt(8)) != -1 || CharactersNeutral.some(String => Characters[Count].includes(String)))
					{
						if(document.getElementById("SelectCharacterELE00").style.opacity == "1")
							{
								document.getElementById(Characters[Count]).style.display = "inline";
							}
						else if(document.getElementById("SelectCharacterELE01").style.opacity == "1" && (CharactersELE00.some(String => Characters[Count].includes(String)) || CharactersELE01.some(String => Characters[Count].includes(String))))
							{
								document.getElementById(Characters[Count]).style.display = "inline";
							}
						else if(document.getElementById("SelectCharacterELE02").style.opacity == "1" && (CharactersELE00.some(String => Characters[Count].includes(String)) || CharactersELE02.some(String => Characters[Count].includes(String))))
							{
								document.getElementById(Characters[Count]).style.display = "inline";
							}
						else if(document.getElementById("SelectCharacterELE03").style.opacity == "1" && (CharactersELE00.some(String => Characters[Count].includes(String)) || CharactersELE03.some(String => Characters[Count].includes(String))))
							{
								document.getElementById(Characters[Count]).style.display = "inline";
							}
						else if(document.getElementById("SelectCharacterELE04").style.opacity == "1" && (CharactersELE00.some(String => Characters[Count].includes(String)) || CharactersELE04.some(String => Characters[Count].includes(String))))
							{
								document.getElementById(Characters[Count]).style.display = "inline";
							}
						else
							{
								document.getElementById(Characters[Count]).style.display = "none";
							}
					}
				else
					{
						document.getElementById(Characters[Count]).style.display = "none";
					}
			}
	}
function SelectCharacter(ID)
	{
		document.getElementById("ID" + IDCurr + "Character").src = "PNG/Character Icon/" + ID + ".png";
		var Select = (IDCurr.charAt(1) == "1") ? 1 : -3;
		Data.CharacterID[parseInt(IDCurr.charAt(3)) - Select] = ID;
		document.getElementById("ID" + IDCurr + "Destiny").style.display = (ID.charAt(7) == "0") ? "none" : "inline";
		document.getElementById("ID" + IDCurr + "Element").style.display = (ID == "100000 00") ? "none" : "inline";
		if(CharactersELE00.some(String => ID.includes(String)))
			{
				if(document.getElementById("SelectCharacterELE01").style.opacity == "1")
					{
						document.getElementById("ID" + IDCurr + "Element").src = "PNG/UI/ELE01.png";
					}
				else if(document.getElementById("SelectCharacterELE02").style.opacity == "1")
					{
						document.getElementById("ID" + IDCurr + "Element").src = "PNG/UI/ELE02.png";
					}
				else if(document.getElementById("SelectCharacterELE03").style.opacity == "1")
					{
						document.getElementById("ID" + IDCurr + "Element").src = "PNG/UI/ELE03.png";
					}
				else if(document.getElementById("SelectCharacterELE04").style.opacity == "1")
					{
						document.getElementById("ID" + IDCurr + "Element").src = "PNG/UI/ELE04.png";
					}
				else
					{
						document.getElementById("ID" + IDCurr + "Element").src = "PNG/UI/ELE00.png";
					}
				document.getElementById("ID" + IDCurr + "Element").style.cursor = "pointer";
			}
		else
			{
				if(CharactersELE01.some(String => ID.includes(String)))
					{
						document.getElementById("ID" + IDCurr + "Element").src = "PNG/UI/ELE01.png";
					}
				else if(CharactersELE02.some(String => ID.includes(String)))
					{
						document.getElementById("ID" + IDCurr + "Element").src = "PNG/UI/ELE02.png";
					}
				else if(CharactersELE03.some(String => ID.includes(String)))
					{
						document.getElementById("ID" + IDCurr + "Element").src = "PNG/UI/ELE03.png";
					}
				else if(CharactersELE04.some(String => ID.includes(String)))
					{
						document.getElementById("ID" + IDCurr + "Element").src = "PNG/UI/ELE04.png";
					}
				else
					{
						document.getElementById("ID" + IDCurr + "Element").src = "PNG/UI/ELE00.png";
					}
				document.getElementById("ID" + IDCurr + "Element").style.cursor = "default";
			}
		SelectDone();
		DB("");
	}
function SelectWeaponList(ID)
	{
		IDCurr = ID.replace("ID", "").replace("Weapon", "");
		document.getElementById("SelectCancel").style.display = "inline";
		document.getElementById("SelectWeaponList").style.display = "inline";
		Timeout = setTimeout(function()
			{
				document.getElementById("SelectCancel").style.opacity = "0.5";
				document.getElementById("SelectWeaponList").style.height = "50%";
			}, 1);
		document.getElementById("SelectWeapon").scrollTop = 0;
		SelectWeaponFilter("");
	}
function SelectWeaponFilter(ID)
	{
		if(ID != "")
			{
				for(var Count = 0; Count < 3; Count ++)
					{
						document.getElementById("SelectWeaponRarity0" + Count).style.opacity = (ID == ("SelectWeaponRarity0" + Count)) ? "1" : "0.5";
					}
			}
		for(var Count = 0; Count < Weapons.length; Count ++)
			{
				if(document.getElementById("SelectWeaponRarity00").style.opacity == "1")
					{
						document.getElementById(Weapons[Count]).style.display = "inline";
					}
				else if(document.getElementById("SelectWeaponRarity01").style.opacity == "1" && ["1", "2", "3", "4", "5"].indexOf(Weapons[Count].charAt(2)) != -1)
					{
						document.getElementById(Weapons[Count]).style.display = "inline";
					}
				else if(document.getElementById("SelectWeaponRarity02").style.opacity == "1" && Weapons[Count].charAt(2) == "6")
					{
						document.getElementById(Weapons[Count]).style.display = "inline";
					}
				else
					{
						document.getElementById(Weapons[Count]).style.display = "none";
					}
			}
	}
function SelectWeapon(ID)
	{
		document.getElementById("ID" + IDCurr + "Weapon").src = "PNG/Weapon Icon/" + ID + ".png";
		var Select = (IDCurr.charAt(1) == "1") ? 1 : -3;
		Data.WeaponID[parseInt(IDCurr.charAt(3)) - Select] = ID;
		SelectDone();
	}
function SelectSoulList(ID)
	{
		IDCurr = ID.replace("ID", "").replace("Soul", "");
		document.getElementById("SelectCancel").style.display = "inline";
		document.getElementById("SelectSoulList").style.display = "inline";
		Timeout = setTimeout(function()
			{
				document.getElementById("SelectCancel").style.opacity = "0.5";
				document.getElementById("SelectSoulList").style.height = "50%";
			}, 1);
		document.getElementById("SelectSoul").scrollTop = 0;
		SelectSoulFilter("");
	}
function SelectSoulFilter(ID)
	{
		if(ID != "")
			{
				for(var Count = 0; Count < 3; Count ++)
					{
						document.getElementById("SelectSoulRarity0" + Count).style.opacity = (ID == ("SelectSoulRarity0" + Count)) ? "1" : "0.5";
					}
			}
		for(var Count = 0; Count < Souls.length; Count ++)
			{
				if(document.getElementById("SelectSoulRarity00").style.opacity == "1")
					{
						document.getElementById(Souls[Count]).style.display = "inline";
					}
				else if(document.getElementById("SelectSoulRarity01").style.opacity == "1" && ["1", "2", "3", "4", "5"].indexOf(Souls[Count].charAt(2)) != -1)
					{
						document.getElementById(Souls[Count]).style.display = "inline";
					}
				else if(document.getElementById("SelectSoulRarity02").style.opacity == "1" && Souls[Count].charAt(2) == "6")
					{
						document.getElementById(Souls[Count]).style.display = "inline";
					}
				else
					{
						document.getElementById(Souls[Count]).style.display = "none";
					}
			}
	}
function SelectSoul(ID)
	{
		document.getElementById("ID" + IDCurr + "Soul").src = "PNG/Soul Icon/" + ID + ".png";
		var Select = (IDCurr.charAt(1) == "1") ? 1 : -3;
		Data.SoulID[parseInt(IDCurr.charAt(3)) - Select] = ID;
		SelectDone();
	}
function SelectIdoMagList(ID)
	{
		IDCurr = ID.replace("ID", "").replace("IdoMag", "");
		document.getElementById("SelectCancel").style.display = "inline";
		document.getElementById("SelectIdoMagList").style.display = "inline";
		Timeout = setTimeout(function()
			{
				document.getElementById("SelectCancel").style.opacity = "0.5";
				document.getElementById("SelectIdoMagList").style.height = "50%";
			}, 1);
		document.getElementById("SelectIdoMag").scrollTop = 0;
	}
function SelectIdoMag(ID)
	{
		document.getElementById("ID" + IDCurr + "IdoMag").src = "PNG/IdoMag Icon/" + ID + ".png";
		(IDCurr == "01") ? Data.IdoMagID[0] = ID : Data.IdoMagID[1] = ID;
		SelectDone();
	}
function SelectDone()
	{
		clearTimeout(Timeout);
		document.getElementById("SelectCancel").style.opacity = "0";
		document.getElementById("SelectCharacterList").style.height = "0%";
		document.getElementById("SelectWeaponList").style.height = "0%";
		document.getElementById("SelectSoulList").style.height = "0%";
		document.getElementById("SelectIdoMagList").style.height = "0%";
		Timeout = setTimeout(function()
			{
				document.getElementById("SelectCancel").style.display = "none";
				document.getElementById("SelectCharacterList").style.display = "none";
				document.getElementById("SelectWeaponList").style.display = "none";
				document.getElementById("SelectSoulList").style.display = "none";
				document.getElementById("SelectIdoMagList").style.display = "none";
			}, 250);
	}
function SelectElement(ID)
	{
		if(window.getComputedStyle(document.getElementById(ID)).getPropertyValue("cursor") == "pointer")
			{
				
				if(document.getElementById(ID).src.includes("PNG/UI/ELE00.png"))
					{
						document.getElementById(ID).src = "PNG/UI/ELE01.png";
					}
				else if(document.getElementById(ID).src.includes("PNG/UI/ELE01.png"))
					{
						document.getElementById(ID).src = "PNG/UI/ELE02.png";
					}
				else if(document.getElementById(ID).src.includes("PNG/UI/ELE02.png"))
					{
						document.getElementById(ID).src = "PNG/UI/ELE03.png";
					}
				else if(document.getElementById(ID).src.includes("PNG/UI/ELE03.png"))
					{
						document.getElementById(ID).src = "PNG/UI/ELE04.png";
					}
				else if(document.getElementById(ID).src.includes("PNG/UI/ELE04.png"))
					{
						document.getElementById(ID).src = "PNG/UI/ELE01.png";
					}
			}
		Stat("ID0101CharacterSPD");
	}
function SelectDB(ID)
	{
		document.getElementById(ID).style.opacity = (document.getElementById(ID).style.opacity == "1") ? "0.5" : "1";
		DB("ID0101CharacterDB");
	}
function LB(ID)
	{
		if(document.getElementById(ID).value == "") { document.getElementById(ID).value = document.getElementById(ID).min; }
		document.getElementById(ID).value = Math.trunc(document.getElementById(ID).value);
		if(parseFloat(document.getElementById(ID).value) < parseFloat(document.getElementById(ID).min)) { document.getElementById(ID).value = document.getElementById(ID).min; }
		if(parseFloat(document.getElementById(ID).value) > parseFloat(document.getElementById(ID).max)) { document.getElementById(ID).value = document.getElementById(ID).max; }
		for(var Count01 = 1; Count01 < 3; Count01 ++)
			{
				for(var Count02 = 1; Count02 < 5; Count02 ++)
					{
						Data.CharacterLB[(Count01 == 1) ? Count02 - 1 : Count02 + 3] = document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterLB").value;
					}
			}
		Stat("ID0101CharacterSPD");
	}
function DB(ID)
	{
		if(ID != "")
			{
				if(document.getElementById(ID).value == "") { document.getElementById(ID).value = document.getElementById(ID).min; }
				document.getElementById(ID).value = Math.trunc(document.getElementById(ID).value);
				if(parseFloat(document.getElementById(ID).value) < parseFloat(document.getElementById(ID).min)) { document.getElementById(ID).value = document.getElementById(ID).min; }
				if(parseFloat(document.getElementById(ID).value) > parseFloat(document.getElementById(ID).max)) { document.getElementById(ID).value = document.getElementById(ID).max; }
			}
		for(var Count01 = 1; Count01 < 3; Count01 ++)
			{
				for(var Count02 = 1; Count02 < 5; Count02 ++)
					{
						if(CharactersDBNA.some(String => Data.CharacterID[(Count01 == 1) ? Count02 - 1 : Count02 + 3].includes(String)))
							{
								document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterD").style.opacity = "0.5";
								document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterDB").style.display = "none";
							}
						document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterDB").style.display = (document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterD").style.opacity == "1") ? "inline" : "none";
						Data.CharacterD[(Count01 == 1) ? Count02 - 1 : Count02 + 3] = document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterD").style.opacity;
						Data.CharacterDB[(Count01 == 1) ? Count02 - 1 : Count02 + 3] = document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterDB").value;
					}
			}
		Stat("ID0101CharacterSPD");
	}
function TB(ID)
	{
		if(document.getElementById(ID).value == "") { document.getElementById(ID).value = document.getElementById(ID).min; }
		document.getElementById(ID).value = Math.trunc(document.getElementById(ID).value);
		if(parseFloat(document.getElementById(ID).value) < parseFloat(document.getElementById(ID).min)) { document.getElementById(ID).value = document.getElementById(ID).min; }
		if(parseFloat(document.getElementById(ID).value) > parseFloat(document.getElementById(ID).max)) { document.getElementById(ID).value = document.getElementById(ID).max; }
		for(var Count01 = 1; Count01 < 3; Count01 ++)
			{
				for(var Count02 = 1; Count02 < 5; Count02 ++)
					{
						Data.CharacterTB[(Count01 == 1) ? Count02 - 1 : Count02 + 3] = document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTB").value;
					}
			}
		Stat("ID0101CharacterSPD");
	}
function Stat(ID)
	{
		if(document.getElementById(ID).value == "") { document.getElementById(ID).value = document.getElementById(ID).min; }
		document.getElementById(ID).value = (ID.includes("ELE")) ? (Math.trunc(document.getElementById(ID).value * 10) / 10) : Math.trunc(document.getElementById(ID).value);
		if(parseFloat(document.getElementById(ID).value) < parseFloat(document.getElementById(ID).min)) { document.getElementById(ID).value = document.getElementById(ID).min; }
		if(parseFloat(document.getElementById(ID).value) > parseFloat(document.getElementById(ID).max)) { document.getElementById(ID).value = document.getElementById(ID).max; }
		
		var TotalScore = 0;
		for(var Count01 = 1; Count01 < 3; Count01 ++)
			{
				var IdoMagScore = 0;
				
				var SPDOrder = [["01", 0], ["02", 0], ["03", 0], ["04", 0]];
				
				var ELE01 = 1 + parseInt(document.getElementById("ID0" + Count01 + "IdoMagELE01").value);
				var ELE02 = 1 + parseInt(document.getElementById("ID0" + Count01 + "IdoMagELE02").value);
				var ELE03 = 1 + parseInt(document.getElementById("ID0" + Count01 + "IdoMagELE03").value);
				var ELE04 = 1 + parseInt(document.getElementById("ID0" + Count01 + "IdoMagELE04").value);
				for(var Count02 = 1; Count02 < 5; Count02 ++)
					{
						var FID = Data.CharacterID[(Count01 == 1) ? Count02 - 1 : Count02 + 3];
						var CID = FID.substring(0, 6);
						var RID = FID.substring(0, 7) + "0";
						if(CID == "100000")
							{
								document.getElementById("ID0" + Count01 + "0" + Count02 + "TotalHP").value = 0;
								document.getElementById("ID0" + Count01 + "0" + Count02 + "TotalATK").value = 0;
								document.getElementById("ID0" + Count01 + "0" + Count02 + "TotalDEF").value = 0;
								document.getElementById("ID0" + Count01 + "0" + Count02 + "TotalSPD").value = 0;
								document.getElementById("ID0" + Count01 + "0" + Count02 + "Score").value = 0;
								document.getElementById("ID0" + Count01 + "0" + Count02 + "TotalCRT").value = 0;
								document.getElementById("ID0" + Count01 + "0" + Count02 + "TotalRES").value = 0;
								document.getElementById("ID0" + Count01 + "0" + Count02 + "TotalWEA").value = 0;
								document.getElementById("ID0" + Count01 + "0" + Count02 + "SPD").innerHTML = 0;
								document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterT").style.height = "0px";
							}
						else
							{
								var LB = (document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterDB").style.display == "none") ? (document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterLB").value * 10) : ((document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterLB").value * 10) + 1 + parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterDB").value));
								
								var CharacterScore = 0;
								var WeaponScore = 0;
								var SoulScore = 0;
								
								var TypeHP = 0;
								var TypeATK = 0;
								var TypeDEF = 0;
								var TypeSPD = 0;
								var TypeCRT = 0;
								var TypeRES = 0;
								var TypeWEA = 0;
								
								document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterT").style.height = "64px";
								
								if(FID.charAt(7) == "0")
									{
										if(CharactersTypeATK.some(String => FID.includes(String)))
											{
												TypeHP += CharacterType.TypeATK.HP[parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTB").value)];
												TypeATK += CharacterType.TypeATK.ATK[parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTB").value)];
												TypeDEF += CharacterType.TypeATK.DEF[parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTB").value)];
												document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTI").src = "PNG/UI/TypeATK.png";
											}
										else if(CharactersTypeDEF.some(String => FID.includes(String)))
											{
												TypeHP += CharacterType.TypeDEF.HP[parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTB").value)];
												TypeDEF += CharacterType.TypeDEF.DEF[parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTB").value)];
												TypeSPD += CharacterType.TypeDEF.SPD[parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTB").value)];
												document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTI").src = "PNG/UI/TypeDEF.png";
											}
										else if(CharactersTypeSPD.some(String => FID.includes(String)))
											{
												TypeHP += CharacterType.TypeSPD.HP[parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTB").value)];
												TypeATK += CharacterType.TypeSPD.ATK[parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTB").value)];
												TypeSPD += CharacterType.TypeSPD.SPD[parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTB").value)];
												document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTI").src = "PNG/UI/TypeSPD.png";
											}
										else if(CharactersTypeCRT.some(String => FID.includes(String)))
											{
												TypeHP += CharacterType.TypeCRT.HP[parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTB").value)];
												TypeDEF += CharacterType.TypeCRT.DEF[parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTB").value)];
												TypeSPD += CharacterType.TypeCRT.SPD[parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTB").value)];
												TypeCRT += 40;
												TypeCRT += CharacterType.TypeCRT.CRT[parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTB").value)];
												document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTI").src = "PNG/UI/TypeCRT.png";
											}
										else if(CharactersTypeRES.some(String => FID.includes(String)))
											{
												TypeHP += CharacterType.TypeRES.HP[parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTB").value)];
												TypeATK += CharacterType.TypeRES.ATK[parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTB").value)];
												TypeDEF += CharacterType.TypeRES.DEF[parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTB").value)];
												TypeRES += 50;
												TypeRES += CharacterType.TypeRES.RES[parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTB").value)];
												document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTI").src = "PNG/UI/TypeRES.png";
											}
										else if(CharactersTypeWEA.some(String => FID.includes(String)))
											{
												TypeHP += CharacterType.TypeWEA.HP[parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTB").value)];
												TypeATK += CharacterType.TypeWEA.ATK[parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTB").value)];
												TypeSPD += CharacterType.TypeWEA.SPD[parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTB").value)];
												TypeWEA += 20;
												TypeWEA += CharacterType.TypeWEA.WEA[parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTB").value)];
												document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTI").src = "PNG/UI/TypeWEA.png";
											}
									}
								else
									{
										if(CharactersTypeATK.some(String => String.indexOf(RID) != -1))
											{
												TypeHP -= 200;
												TypeATK -= 110;
												TypeDEF -= 50;
											}
										else if(CharactersTypeDEF.some(String => String.indexOf(RID) != -1))
											{
												TypeHP -= 400;
												TypeDEF -= 130;
												TypeSPD -= 40;
											}
										else if(CharactersTypeSPD.some(String => String.indexOf(RID) != -1))
											{
												TypeHP -= 200;
												TypeATK -= 60;
												TypeSPD -= 90;
											}
										else if(CharactersTypeCRT.some(String => String.indexOf(RID) != -1))
											{
												TypeATK -= 30;
												TypeDEF -= 50;
												TypeSPD -= 70;
											}
										else if(CharactersTypeRES.some(String => String.indexOf(RID) != -1))
											{
												TypeATK -= 50;
												TypeDEF -= 50;
												TypeSPD -= 50;
											}
										else if(CharactersTypeWEA.some(String => String.indexOf(RID) != -1))
											{
												TypeATK -= 70;
												TypeDEF -= 70;
											}
										
										if(CharactersTypeATK.some(String => FID.includes(String)))
											{
												TypeHP += 200;
												TypeHP += CharacterType.TypeATK.HP[parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTB").value)];
												TypeATK += 110;
												TypeATK += CharacterType.TypeATK.ATK[parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTB").value)];
												TypeDEF += 50;
												TypeDEF += CharacterType.TypeATK.DEF[parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTB").value)];
												document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTI").src = "PNG/UI/TypeATK.png";
											}
										else if(CharactersTypeDEF.some(String => FID.includes(String)))
											{
												TypeHP += 400;
												TypeHP += CharacterType.TypeDEF.HP[parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTB").value)];
												TypeDEF += 130;
												TypeDEF += CharacterType.TypeDEF.DEF[parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTB").value)];
												TypeSPD += 40;
												TypeSPD += CharacterType.TypeDEF.SPD[parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTB").value)];
												document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTI").src = "PNG/UI/TypeDEF.png";
											}
										else if(CharactersTypeSPD.some(String => FID.includes(String)))
											{
												TypeHP += 200;
												TypeHP += CharacterType.TypeSPD.HP[parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTB").value)];
												TypeATK += 60;
												TypeATK += CharacterType.TypeSPD.ATK[parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTB").value)];
												TypeSPD += 90;
												TypeSPD += CharacterType.TypeSPD.SPD[parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTB").value)];
												document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTI").src = "PNG/UI/TypeSPD.png";
											}
										else if(CharactersTypeCRT.some(String => FID.includes(String)))
											{
												TypeHP += CharacterType.TypeCRT.HP[parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTB").value)];
												TypeATK += 30;
												TypeDEF += 50;
												TypeDEF += CharacterType.TypeCRT.DEF[parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTB").value)];
												TypeSPD += 70;
												TypeSPD += CharacterType.TypeCRT.SPD[parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTB").value)];
												TypeCRT += 40;
												TypeCRT += CharacterType.TypeCRT.CRT[parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTB").value)];
												document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTI").src = "PNG/UI/TypeCRT.png";
											}
										else if(CharactersTypeRES.some(String => FID.includes(String)))
											{
												TypeHP += CharacterType.TypeRES.HP[parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTB").value)];
												TypeATK += 50;
												TypeATK += CharacterType.TypeRES.ATK[parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTB").value)];
												TypeDEF += 50;
												TypeDEF += CharacterType.TypeRES.DEF[parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTB").value)];
												TypeSPD += 50;
												TypeRES += 50;
												TypeRES += CharacterType.TypeRES.RES[parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTB").value)];
												document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTI").src = "PNG/UI/TypeRES.png";
											}
										else if(CharactersTypeWEA.some(String => FID.includes(String)))
											{
												TypeHP += CharacterType.TypeWEA.HP[parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTB").value)];
												TypeATK += 70;
												TypeATK += CharacterType.TypeWEA.ATK[parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTB").value)];
												TypeDEF += 70;
												TypeSPD += 10;
												TypeSPD += CharacterType.TypeWEA.SPD[parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTB").value)];
												TypeWEA += 20;
												TypeWEA += CharacterType.TypeWEA.WEA[parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTB").value)];
												document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTI").src = "PNG/UI/TypeWEA.png";
											}
									}
								
								var HP = parseInt(CharacterStat[CID].HP[LB]);
								HP += TypeHP;
								HP += parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "WeaponHP").value);
								HP += parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "SoulHP").value);
								HP += parseInt(document.getElementById("ID0" + Count01 + "IdoMagHP").value);
								var HPTXT = HP.toFixed(0);
								document.getElementById("ID0" + Count01 + "0" + Count02 + "TotalHP").value = HPTXT;
								
								var ATK = parseInt(CharacterStat[CID].ATK[LB]);
								ATK += TypeATK;
								ATK += parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "WeaponATK").value);
								ATK += parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "SoulATK").value);
								ATK += parseInt(document.getElementById("ID0" + Count01 + "IdoMagATK").value);
								//ATK += document.getElementById("ID0" + Count01 + "0" + Count02 + "Element").src.includes("PNG/UI/ELE01.png") ? parseInt(document.getElementById("ID0" + Count01 + "IdoMagATK01").value) : 0;
								//ATK += document.getElementById("ID0" + Count01 + "0" + Count02 + "Element").src.includes("PNG/UI/ELE02.png") ? parseInt(document.getElementById("ID0" + Count01 + "IdoMagATK02").value) : 0;
								//ATK += document.getElementById("ID0" + Count01 + "0" + Count02 + "Element").src.includes("PNG/UI/ELE03.png") ? parseInt(document.getElementById("ID0" + Count01 + "IdoMagATK03").value) : 0;
								//ATK += document.getElementById("ID0" + Count01 + "0" + Count02 + "Element").src.includes("PNG/UI/ELE04.png") ? parseInt(document.getElementById("ID0" + Count01 + "IdoMagATK04").value) : 0;
								var ATKTXT = ATK.toFixed(0);
								document.getElementById("ID0" + Count01 + "0" + Count02 + "TotalATK").value = ATKTXT;
								
								var DEF = parseInt(CharacterStat[CID].DEF[LB]);
								DEF += TypeDEF;
								DEF += parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "WeaponDEF").value);
								DEF += parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "SoulDEF").value);
								DEF += parseInt(document.getElementById("ID0" + Count01 + "IdoMagDEF").value);
								//DEF += document.getElementById("ID0" + Count01 + "0" + Count02 + "Element").src.includes("PNG/UI/ELE01.png") ? parseInt(document.getElementById("ID0" + Count01 + "IdoMagDEF01").value) : 0;
								//DEF += document.getElementById("ID0" + Count01 + "0" + Count02 + "Element").src.includes("PNG/UI/ELE02.png") ? parseInt(document.getElementById("ID0" + Count01 + "IdoMagDEF02").value) : 0;
								//DEF += document.getElementById("ID0" + Count01 + "0" + Count02 + "Element").src.includes("PNG/UI/ELE03.png") ? parseInt(document.getElementById("ID0" + Count01 + "IdoMagDEF03").value) : 0;
								//DEF += document.getElementById("ID0" + Count01 + "0" + Count02 + "Element").src.includes("PNG/UI/ELE04.png") ? parseInt(document.getElementById("ID0" + Count01 + "IdoMagDEF04").value) : 0;
								var DEFTXT = DEF.toFixed(0);
								document.getElementById("ID0" + Count01 + "0" + Count02 + "TotalDEF").value = DEFTXT;
								
								var SPD = parseInt(CharacterStat[CID].SPD[LB]);
								SPD += TypeSPD;
								SPD += parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "WeaponSPD").value);
								SPD += parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "SoulSPD").value);
								SPD += parseInt(document.getElementById("ID0" + Count01 + "IdoMagSPD").value);
								SPD += document.getElementById("ID0" + Count01 + "0" + Count02 + "Element").src.includes("PNG/UI/ELE01.png") ? parseInt(document.getElementById("ID0" + Count01 + "IdoMagSPD01").value) : 0;
								SPD += document.getElementById("ID0" + Count01 + "0" + Count02 + "Element").src.includes("PNG/UI/ELE02.png") ? parseInt(document.getElementById("ID0" + Count01 + "IdoMagSPD02").value) : 0;
								SPD += document.getElementById("ID0" + Count01 + "0" + Count02 + "Element").src.includes("PNG/UI/ELE03.png") ? parseInt(document.getElementById("ID0" + Count01 + "IdoMagSPD03").value) : 0;
								SPD += document.getElementById("ID0" + Count01 + "0" + Count02 + "Element").src.includes("PNG/UI/ELE04.png") ? parseInt(document.getElementById("ID0" + Count01 + "IdoMagSPD04").value) : 0;
								var SPDTXT = SPD.toFixed(0);
								document.getElementById("ID0" + Count01 + "0" + Count02 + "TotalSPD").value = SPDTXT;
								
								document.getElementById("ID0" + Count01 + "0" + Count02 + "TotalCRT").value = TypeCRT + parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "WeaponCRT").value) + parseInt(document.getElementById("ID0" + Count01 + "IdoMagCRT").value);
								document.getElementById("ID0" + Count01 + "0" + Count02 + "TotalRES").value = TypeRES + parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "WeaponRES").value) + parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "SoulRES").value) + parseInt(document.getElementById("ID0" + Count01 + "IdoMagRES").value);
								document.getElementById("ID0" + Count01 + "0" + Count02 + "TotalWEA").value = TypeWEA;
								
								CharacterScore += (parseInt(CharacterStat[CID].HP[LB]) + TypeHP) * 0.25;
								CharacterScore += (parseInt(CharacterStat[CID].ATK[LB]) + TypeATK)* 5;
								CharacterScore += (parseInt(CharacterStat[CID].DEF[LB]) + TypeDEF)* 5;
								CharacterScore += (parseInt(CharacterStat[CID].SPD[LB]) + TypeSPD)* 5;
								CharacterScore += TypeCRT * 25;
								CharacterScore += TypeRES * 25;
								CharacterScore += TypeWEA * 12.5;
								var CharacterScoreTXT = Math.ceil(CharacterScore);
								document.getElementById("ID0" + Count01 + "0" + Count02 + "Score").value = CharacterScoreTXT;
								TotalScore += CharacterScoreTXT;
								
								WeaponScore += parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "WeaponHP").value) * 0.25;
								WeaponScore += parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "WeaponATK").value) * 5;
								WeaponScore += parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "WeaponDEF").value) * 5;
								WeaponScore += parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "WeaponSPD").value) * 5;
								WeaponScore += parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "WeaponCRT").value) * 25;
								WeaponScore += parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "WeaponRES").value) * 25;
								var WeaponScoreTXT = Math.ceil(WeaponScore);
								document.getElementById("ID0" + Count01 + "0" + Count02 + "WeaponScore").value = WeaponScoreTXT;
								TotalScore += WeaponScoreTXT;
								
								SoulScore += parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "SoulHP").value) * 0.25;
								SoulScore += parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "SoulATK").value) * 5;
								SoulScore += parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "SoulDEF").value) * 5;
								SoulScore += parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "SoulSPD").value) * 5;
								SoulScore += parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "SoulRES").value) * 25;
								SoulScore += parseFloat(document.getElementById("ID0" + Count01 + "0" + Count02 + "SoulELE").value) * 750;
								var SoulScoreTXT = Math.ceil(SoulScore);
								document.getElementById("ID0" + Count01 + "0" + Count02 + "SoulScore").value = SoulScoreTXT;
								TotalScore += SoulScoreTXT;
								
								IdoMagScore += parseInt(document.getElementById("ID0" + Count01 + "IdoMagHP").value) * 0.25;
								IdoMagScore += parseInt(document.getElementById("ID0" + Count01 + "IdoMagATK").value) * 5;
								IdoMagScore += parseInt(document.getElementById("ID0" + Count01 + "IdoMagDEF").value) * 5;
								IdoMagScore += parseInt(document.getElementById("ID0" + Count01 + "IdoMagSPD").value) * 5;
								IdoMagScore += parseInt(document.getElementById("ID0" + Count01 + "IdoMagCRT").value) * 7.5;
								IdoMagScore += parseInt(document.getElementById("ID0" + Count01 + "IdoMagRES").value) * 7.5;
								IdoMagScore += parseInt(document.getElementById("ID0" + Count01 + "IdoMagRED").value) * 6.25;
								//IdoMagScore += document.getElementById("ID0" + Count01 + "0" + Count02 + "Element").src.includes("PNG/UI/ELE01.png") ? (parseInt(document.getElementById("ID0" + Count01 + "IdoMagATK01").value) * 2.25) : 0;
								//IdoMagScore += document.getElementById("ID0" + Count01 + "0" + Count02 + "Element").src.includes("PNG/UI/ELE02.png") ? (parseInt(document.getElementById("ID0" + Count01 + "IdoMagATK02").value) * 2.25) : 0;
								//IdoMagScore += document.getElementById("ID0" + Count01 + "0" + Count02 + "Element").src.includes("PNG/UI/ELE03.png") ? (parseInt(document.getElementById("ID0" + Count01 + "IdoMagATK03").value) * 2.25) : 0;
								//IdoMagScore += document.getElementById("ID0" + Count01 + "0" + Count02 + "Element").src.includes("PNG/UI/ELE04.png") ? (parseInt(document.getElementById("ID0" + Count01 + "IdoMagATK04").value) * 2.25) : 0;
								//IdoMagScore += document.getElementById("ID0" + Count01 + "0" + Count02 + "Element").src.includes("PNG/UI/ELE01.png") ? (parseInt(document.getElementById("ID0" + Count01 + "IdoMagDEF01").value) * 2.25) : 0;
								//IdoMagScore += document.getElementById("ID0" + Count01 + "0" + Count02 + "Element").src.includes("PNG/UI/ELE02.png") ? (parseInt(document.getElementById("ID0" + Count01 + "IdoMagDEF02").value) * 2.25) : 0;
								//IdoMagScore += document.getElementById("ID0" + Count01 + "0" + Count02 + "Element").src.includes("PNG/UI/ELE03.png") ? (parseInt(document.getElementById("ID0" + Count01 + "IdoMagDEF03").value) * 2.25) : 0;
								//IdoMagScore += document.getElementById("ID0" + Count01 + "0" + Count02 + "Element").src.includes("PNG/UI/ELE04.png") ? (parseInt(document.getElementById("ID0" + Count01 + "IdoMagDEF04").value) * 2.25) : 0;
								IdoMagScore += document.getElementById("ID0" + Count01 + "0" + Count02 + "Element").src.includes("PNG/UI/ELE01.png") ? (parseInt(document.getElementById("ID0" + Count01 + "IdoMagSPD01").value) * 2.25) : 0;
								IdoMagScore += document.getElementById("ID0" + Count01 + "0" + Count02 + "Element").src.includes("PNG/UI/ELE02.png") ? (parseInt(document.getElementById("ID0" + Count01 + "IdoMagSPD02").value) * 2.25) : 0;
								IdoMagScore += document.getElementById("ID0" + Count01 + "0" + Count02 + "Element").src.includes("PNG/UI/ELE04.png") ? (parseInt(document.getElementById("ID0" + Count01 + "IdoMagSPD04").value) * 2.25) : 0;
								IdoMagScore += document.getElementById("ID0" + Count01 + "0" + Count02 + "Element").src.includes("PNG/UI/ELE03.png") ? (parseInt(document.getElementById("ID0" + Count01 + "IdoMagSPD03").value) * 2.25) : 0;
								
								var SPDO = SPD;
								SPDO *= (100 + parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "SupportSPD").value)) / 100;
								SPDOrder[Count02 - 1][1] = parseFloat(SPDO.toFixed(4));
								var SPDOTXT = SPDO.toFixed(0);
								document.getElementById("ID0" + Count01 + "0" + Count02 + "SPD").innerHTML = SPDOTXT;
								
								ELE01 += (document.getElementById("ID0" + Count01 + "0" + Count02 + "Element").src.includes("PNG/UI/ELE01.png")) ? (parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterLB").value) * 0.25) : 0 ;
								ELE02 += (document.getElementById("ID0" + Count01 + "0" + Count02 + "Element").src.includes("PNG/UI/ELE02.png")) ? (parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterLB").value) * 0.25) : 0 ;
								ELE03 += (document.getElementById("ID0" + Count01 + "0" + Count02 + "Element").src.includes("PNG/UI/ELE03.png")) ? (parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterLB").value) * 0.25) : 0 ;
								ELE04 += (document.getElementById("ID0" + Count01 + "0" + Count02 + "Element").src.includes("PNG/UI/ELE04.png")) ? (parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterLB").value) * 0.25) : 0 ;
							}
						Data.WeaponHP[(Count01 == 1) ? Count02 - 1 : Count02 + 3] = document.getElementById("ID0" + Count01 + "0" + Count02 + "WeaponHP").value;
						Data.WeaponATK[(Count01 == 1) ? Count02 - 1 : Count02 + 3] = document.getElementById("ID0" + Count01 + "0" + Count02 + "WeaponATK").value;
						Data.WeaponDEF[(Count01 == 1) ? Count02 - 1 : Count02 + 3] = document.getElementById("ID0" + Count01 + "0" + Count02 + "WeaponDEF").value;
						Data.WeaponSPD[(Count01 == 1) ? Count02 - 1 : Count02 + 3] = document.getElementById("ID0" + Count01 + "0" + Count02 + "WeaponSPD").value;
						Data.WeaponCRT[(Count01 == 1) ? Count02 - 1 : Count02 + 3] = document.getElementById("ID0" + Count01 + "0" + Count02 + "WeaponCRT").value;
						Data.WeaponRES[(Count01 == 1) ? Count02 - 1 : Count02 + 3] = document.getElementById("ID0" + Count01 + "0" + Count02 + "WeaponRES").value;
						Data.SoulHP[(Count01 == 1) ? Count02 - 1 : Count02 + 3] = document.getElementById("ID0" + Count01 + "0" + Count02 + "SoulHP").value;
						Data.SoulATK[(Count01 == 1) ? Count02 - 1 : Count02 + 3] = document.getElementById("ID0" + Count01 + "0" + Count02 + "SoulATK").value;
						Data.SoulDEF[(Count01 == 1) ? Count02 - 1 : Count02 + 3] = document.getElementById("ID0" + Count01 + "0" + Count02 + "SoulDEF").value;
						Data.SoulSPD[(Count01 == 1) ? Count02 - 1 : Count02 + 3] = document.getElementById("ID0" + Count01 + "0" + Count02 + "SoulSPD").value;
						Data.SoulRES[(Count01 == 1) ? Count02 - 1 : Count02 + 3] = document.getElementById("ID0" + Count01 + "0" + Count02 + "SoulRES").value;
						Data.SoulELE[(Count01 == 1) ? Count02 - 1 : Count02 + 3] = document.getElementById("ID0" + Count01 + "0" + Count02 + "SoulELE").value;
						Data.SupportSPD[(Count01 == 1) ? Count02 - 1 : Count02 + 3] = document.getElementById("ID0" + Count01 + "0" + Count02 + "SupportSPD").value;
						
						document.getElementById("ID0" + Count01 + "0" + Count02 + "TypeCRT").style.height = (document.getElementById("ID0" + Count01 + "0" + Count02 + "TotalCRT").value != 0) ? "24px" : "0px";
						document.getElementById("ID0" + Count01 + "0" + Count02 + "TypeRES").style.height = (document.getElementById("ID0" + Count01 + "0" + Count02 + "TotalRES").value != 0) ? "24px" : "0px";
						document.getElementById("ID0" + Count01 + "0" + Count02 + "TypeWEA").style.height = (document.getElementById("ID0" + Count01 + "0" + Count02 + "TotalWEA").value != 0) ? "24px" : "0px";
					}
				IdoMagScore += parseInt(document.getElementById("ID0" + Count01 + "IdoMagELE01").value) * 100;
				IdoMagScore += parseInt(document.getElementById("ID0" + Count01 + "IdoMagELE02").value) * 100;
				IdoMagScore += parseInt(document.getElementById("ID0" + Count01 + "IdoMagELE03").value) * 100;
				IdoMagScore += parseInt(document.getElementById("ID0" + Count01 + "IdoMagELE04").value) * 100;
				//IdoMagScore += parseInt(document.getElementById("ID0" + Count01 + "IdoMagSPATK").value) * 6.25;
				//IdoMagScore += parseInt(document.getElementById("ID0" + Count01 + "IdoMagSPDEF").value) * 6.25;
				//IdoMagScore += parseInt(document.getElementById("ID0" + Count01 + "IdoMagSPSPD").value) * 6.25;
				//IdoMagScore += parseInt(document.getElementById("ID0" + Count01 + "IdoMagSPRES").value) * 2.25;
				var IdoMagScoreTXT = Math.ceil(IdoMagScore);
				document.getElementById("ID0" + Count01 + "IdoMagScore").value = IdoMagScoreTXT;
				TotalScore += IdoMagScoreTXT;
				
				SPDOrder.sort(function(a, b) { return b[1] - a[1]; } );
				document.getElementById("ID0" + Count01 + SPDOrder[0][0] + "SPDOrder").innerHTML = "1ST";
				document.getElementById("ID0" + Count01 + SPDOrder[1][0] + "SPDOrder").innerHTML = "2ND";
				document.getElementById("ID0" + Count01 + SPDOrder[2][0] + "SPDOrder").innerHTML = "3RD";
				document.getElementById("ID0" + Count01 + SPDOrder[3][0] + "SPDOrder").innerHTML = "4TH";
				
				if(ELE01 > 10) { ELE01 = 10; }
				if(ELE02 > 10) { ELE02 = 10; }
				if(ELE03 > 10) { ELE03 = 10; }
				if(ELE04 > 10) { ELE04 = 10; }
				document.getElementById("ID0" + Count01 + "TotalELE01").value = ELE01;
				document.getElementById("ID0" + Count01 + "TotalELE02").value = ELE02;
				document.getElementById("ID0" + Count01 + "TotalELE03").value = ELE03;
				document.getElementById("ID0" + Count01 + "TotalELE04").value = ELE04;
				
				Data.IdoMagHP[Count01 - 1] = document.getElementById("ID0" + Count01 + "IdoMagHP").value;
				Data.IdoMagATK[Count01 - 1] = document.getElementById("ID0" + Count01 + "IdoMagATK").value;
				Data.IdoMagDEF[Count01 - 1] = document.getElementById("ID0" + Count01 + "IdoMagDEF").value;
				Data.IdoMagSPD[Count01 - 1] = document.getElementById("ID0" + Count01 + "IdoMagSPD").value;
				Data.IdoMagCRT[Count01 - 1] = document.getElementById("ID0" + Count01 + "IdoMagCRT").value;
				Data.IdoMagRES[Count01 - 1] = document.getElementById("ID0" + Count01 + "IdoMagRES").value;
				Data.IdoMagRED[Count01 - 1] = document.getElementById("ID0" + Count01 + "IdoMagRED").value;
				Data.IdoMagELE01[Count01 - 1] = document.getElementById("ID0" + Count01 + "IdoMagELE01").value;
				Data.IdoMagELE02[Count01 - 1] = document.getElementById("ID0" + Count01 + "IdoMagELE02").value;
				Data.IdoMagELE03[Count01 - 1] = document.getElementById("ID0" + Count01 + "IdoMagELE03").value;
				Data.IdoMagELE04[Count01 - 1] = document.getElementById("ID0" + Count01 + "IdoMagELE04").value;
				Data.IdoMagEXP[Count01 - 1] = document.getElementById("ID0" + Count01 + "IdoMagEXP").value;
				Data.IdoMagKZN[Count01 - 1] = document.getElementById("ID0" + Count01 + "IdoMagKZN").value;
				Data.IdoMagMST[Count01 - 1] = document.getElementById("ID0" + Count01 + "IdoMagMST").value;
				//Data.IdoMagATK01[Count01 - 1] = document.getElementById("ID0" + Count01 + "IdoMagATK01").value;
				//Data.IdoMagATK02[Count01 - 1] = document.getElementById("ID0" + Count01 + "IdoMagATK02").value;
				//Data.IdoMagATK03[Count01 - 1] = document.getElementById("ID0" + Count01 + "IdoMagATK03").value;
				//Data.IdoMagATK04[Count01 - 1] = document.getElementById("ID0" + Count01 + "IdoMagATK04").value;
				//Data.IdoMagDEF01[Count01 - 1] = document.getElementById("ID0" + Count01 + "IdoMagDEF01").value;
				//Data.IdoMagDEF02[Count01 - 1] = document.getElementById("ID0" + Count01 + "IdoMagDEF02").value;
				//Data.IdoMagDEF03[Count01 - 1] = document.getElementById("ID0" + Count01 + "IdoMagDEF03").value;
				//Data.IdoMagDEF04[Count01 - 1] = document.getElementById("ID0" + Count01 + "IdoMagDEF04").value;
				Data.IdoMagSPD01[Count01 - 1] = document.getElementById("ID0" + Count01 + "IdoMagSPD01").value;
				Data.IdoMagSPD02[Count01 - 1] = document.getElementById("ID0" + Count01 + "IdoMagSPD02").value;
				Data.IdoMagSPD03[Count01 - 1] = document.getElementById("ID0" + Count01 + "IdoMagSPD03").value;
				Data.IdoMagSPD04[Count01 - 1] = document.getElementById("ID0" + Count01 + "IdoMagSPD04").value;
			}
		document.getElementById("TotalScore").value = TotalScore;
		document.getElementById("Rank").src = "PNG/UI/Rank01.png";
		if(TotalScore >= 20000) { document.getElementById("Rank").src = "PNG/UI/Rank02.png"; }
		if(TotalScore >= 28000) { document.getElementById("Rank").src = "PNG/UI/Rank03.png"; }
		if(TotalScore >= 36000) { document.getElementById("Rank").src = "PNG/UI/Rank04.png"; }
		if(TotalScore >= 44000) { document.getElementById("Rank").src = "PNG/UI/Rank05.png"; }
		if(TotalScore >= 56000) { document.getElementById("Rank").src = "PNG/UI/Rank06.png"; }
		if(TotalScore >= 64000) { document.getElementById("Rank").src = "PNG/UI/Rank07.png"; }
		if(TotalScore >= 72000) { document.getElementById("Rank").src = "PNG/UI/Rank08.png"; }
		if(TotalScore >= 84000) { document.getElementById("Rank").src = "PNG/UI/Rank09.png"; }
		if(TotalScore >= 105000) { document.getElementById("Rank").src = "PNG/UI/Rank10.png"; }
		if(TotalScore >= 120000) { document.getElementById("Rank").src = "PNG/UI/Rank11.png"; }
		if(TotalScore >= 145000) { document.getElementById("Rank").src = "PNG/UI/Rank12.png"; }
	}
function DataChange()
	{
		if(document.getElementById("DataList").options.selectedIndex == 0)
			{
				document.getElementById("DataName").style.opacity = "1";
				document.getElementById("DataName").style.pointerEvents = "auto";
				document.getElementById("DataName").disabled = false;
				document.getElementById("DataLoad").style.opacity = "0.5";
				document.getElementById("DataLoad").style.pointerEvents = "none";
				document.getElementById("DataDelete").style.opacity = "0.5";
				document.getElementById("DataDelete").style.pointerEvents = "none";
			}
		else
			{
				document.getElementById("DataName").style.opacity = "0.5";
				document.getElementById("DataName").style.pointerEvents = "none";
				document.getElementById("DataName").disabled = true;
				document.getElementById("DataLoad").style.opacity = "1";
				document.getElementById("DataLoad").style.pointerEvents = "auto";
				document.getElementById("DataDelete").style.opacity = "1";
				document.getElementById("DataDelete").style.pointerEvents = "auto";
			}
	}
function DataSave()
	{
		if(document.getElementById("DataList").options.selectedIndex == 0)
			{
				if(document.getElementById("DataName").value == "")
					{
						document.getElementById("DataName").value = "SAVE " + (parseInt(localStorage.length) + 1);
					}
				localStorage.setItem(document.getElementById("DataName").value, JSON.stringify(Data));
				var DataBool = false;
				for(var Count = 0; Count < document.getElementById("DataList").length; Count ++)
					{
						if(document.getElementById("DataList").options[Count].value == document.getElementById("DataName").value)
							{
								DataBool = true;
								document.getElementById("DataList").options.selectedIndex = Count;
							}
					}
				if(!DataBool)
					{
						var DataList = document.createElement("option");
						DataList.text = document.getElementById("DataName").value;
						document.getElementById("DataList").options.add(DataList);
						document.getElementById("DataList").options.selectedIndex = document.getElementById("DataList").options.length - 1;
					}
			}
		else
			{
				localStorage.setItem(document.getElementById("DataList").options[document.getElementById("DataList").selectedIndex].text, JSON.stringify(Data));
			}
		document.getElementById("DataName").value = "";
		DataChange();
	}
function DataShare()
	{
		DataLink = "http://nnstjp.github.io/Idola/index.html?" + encodeURI(JSON.stringify(Data));
		var DataCopy = document.createElement('textarea');
		DataCopy.setAttribute("readonly", "");
		DataCopy.style = { position: "absolute", left: "-100%" };
		DataCopy.value = DataLink;
		document.body.appendChild(DataCopy);
		DataCopy.select();
		document.execCommand('copy');
		document.body.removeChild(DataCopy);
		window.alert("Party Linked to Clipboard!");
	}
function DataLoad()
	{
		var DataLoad = JSON.parse(localStorage.getItem(document.getElementById("DataList").value));
		if(DataLoad.Party) { SelectParty("ID" + DataLoad.Party); }
		for(var Count01 = 1; Count01 < 3; Count01 ++)
			{
				for(var Count02 = 1; Count02 < 5; Count02 ++)
					{
						IDCurr = "0" + Count01 + "0" + Count02;
						if(DataLoad.CharacterID) { SelectCharacter(DataLoad.CharacterID[(Count01 == 1) ? Count02 - 1 : Count02 + 3]); }
						if(DataLoad.CharacterLB) { document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterLB").value = DataLoad.CharacterLB[(Count01 == 1) ? Count02 - 1 : Count02 + 3]; }
						if(DataLoad.CharacterD) { document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterD").style.opacity = DataLoad.CharacterD[(Count01 == 1) ? Count02 - 1 : Count02 + 3]; }
						if(DataLoad.CharacterDB) { document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterDB").value = DataLoad.CharacterDB[(Count01 == 1) ? Count02 - 1 : Count02 + 3]; }
						if(DataLoad.CharacterTB) { document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterTB").value = DataLoad.CharacterTB[(Count01 == 1) ? Count02 - 1 : Count02 + 3]; }
						if(DataLoad.WeaponID) { SelectWeapon(DataLoad.WeaponID[(Count01 == 1) ? Count02 - 1 : Count02 + 3]); }
						if(DataLoad.WeaponHP) { document.getElementById("ID0" + Count01 + "0" + Count02 + "WeaponHP").value = DataLoad.WeaponHP[(Count01 == 1) ? Count02 - 1 : Count02 + 3]; }
						if(DataLoad.WeaponATK) { document.getElementById("ID0" + Count01 + "0" + Count02 + "WeaponATK").value = DataLoad.WeaponATK[(Count01 == 1) ? Count02 - 1 : Count02 + 3]; }
						if(DataLoad.WeaponDEF) { document.getElementById("ID0" + Count01 + "0" + Count02 + "WeaponDEF").value = DataLoad.WeaponDEF[(Count01 == 1) ? Count02 - 1 : Count02 + 3]; }
						if(DataLoad.WeaponSPD) { document.getElementById("ID0" + Count01 + "0" + Count02 + "WeaponSPD").value = DataLoad.WeaponSPD[(Count01 == 1) ? Count02 - 1 : Count02 + 3]; }
						if(DataLoad.WeaponCRT) { document.getElementById("ID0" + Count01 + "0" + Count02 + "WeaponCRT").value = DataLoad.WeaponCRT[(Count01 == 1) ? Count02 - 1 : Count02 + 3]; }
						if(DataLoad.WeaponRES) { document.getElementById("ID0" + Count01 + "0" + Count02 + "WeaponRES").value = DataLoad.WeaponRES[(Count01 == 1) ? Count02 - 1 : Count02 + 3]; }
						if(DataLoad.SoulID) { SelectSoul(DataLoad.SoulID[(Count01 == 1) ? Count02 - 1 : Count02 + 3]); }
						if(DataLoad.SoulHP) { document.getElementById("ID0" + Count01 + "0" + Count02 + "SoulHP").value = DataLoad.SoulHP[(Count01 == 1) ? Count02 - 1 : Count02 + 3]; }
						if(DataLoad.SoulATK) { document.getElementById("ID0" + Count01 + "0" + Count02 + "SoulATK").value = DataLoad.SoulATK[(Count01 == 1) ? Count02 - 1 : Count02 + 3]; }
						if(DataLoad.SoulDEF) { document.getElementById("ID0" + Count01 + "0" + Count02 + "SoulDEF").value = DataLoad.SoulDEF[(Count01 == 1) ? Count02 - 1 : Count02 + 3]; }
						if(DataLoad.SoulSPD) { document.getElementById("ID0" + Count01 + "0" + Count02 + "SoulSPD").value = DataLoad.SoulSPD[(Count01 == 1) ? Count02 - 1 : Count02 + 3]; }
						if(DataLoad.SoulRES) { document.getElementById("ID0" + Count01 + "0" + Count02 + "SoulRES").value = DataLoad.SoulRES[(Count01 == 1) ? Count02 - 1 : Count02 + 3]; }
						if(DataLoad.SoulELE) { document.getElementById("ID0" + Count01 + "0" + Count02 + "SoulELE").value = DataLoad.SoulELE[(Count01 == 1) ? Count02 - 1 : Count02 + 3]; }
						document.getElementById("ID0" + Count01 + "0" + Count02 + "SupportSPD").value = DataLoad.SupportSPD[(Count01 == 1) ? Count02 - 1 : Count02 + 3];
					}
				IDCurr = "0" + Count01;
				if(DataLoad.IdoMagID) { SelectIdoMag(DataLoad.IdoMagID[Count01 - 1]); }
				if(DataLoad.IdoMagHP) { document.getElementById("ID0" + Count01 + "IdoMagHP").value = DataLoad.IdoMagHP[Count01 - 1]; }
				if(DataLoad.IdoMagATK) { document.getElementById("ID0" + Count01 + "IdoMagATK").value = DataLoad.IdoMagATK[Count01 - 1]; }
				if(DataLoad.IdoMagDEF) { document.getElementById("ID0" + Count01 + "IdoMagDEF").value = DataLoad.IdoMagDEF[Count01 - 1]; }
				if(DataLoad.IdoMagSPD) { document.getElementById("ID0" + Count01 + "IdoMagSPD").value = DataLoad.IdoMagSPD[Count01 - 1]; }
				if(DataLoad.IdoMagCRT) { document.getElementById("ID0" + Count01 + "IdoMagCRT").value = DataLoad.IdoMagCRT[Count01 - 1]; }
				if(DataLoad.IdoMagRES) { document.getElementById("ID0" + Count01 + "IdoMagRES").value = DataLoad.IdoMagRES[Count01 - 1]; }
				if(DataLoad.IdoMagRED) { document.getElementById("ID0" + Count01 + "IdoMagRED").value = DataLoad.IdoMagRED[Count01 - 1]; }
				if(DataLoad.IdoMagELE01) { document.getElementById("ID0" + Count01 + "IdoMagELE01").value = DataLoad.IdoMagELE01[Count01 - 1]; }
				if(DataLoad.IdoMagELE02) { document.getElementById("ID0" + Count01 + "IdoMagELE02").value = DataLoad.IdoMagELE02[Count01 - 1]; }
				if(DataLoad.IdoMagELE03) { document.getElementById("ID0" + Count01 + "IdoMagELE03").value = DataLoad.IdoMagELE03[Count01 - 1]; }
				if(DataLoad.IdoMagELE04) { document.getElementById("ID0" + Count01 + "IdoMagELE04").value = DataLoad.IdoMagELE04[Count01 - 1]; }
				if(DataLoad.IdoMagEXP) { document.getElementById("ID0" + Count01 + "IdoMagEXP").value = DataLoad.IdoMagEXP[Count01 - 1]; }
				if(DataLoad.IdoMagKZN) { document.getElementById("ID0" + Count01 + "IdoMagKZN").value = DataLoad.IdoMagKZN[Count01 - 1]; }
				if(DataLoad.IdoMagMST) { document.getElementById("ID0" + Count01 + "IdoMagMST").value = DataLoad.IdoMagMST[Count01 - 1]; }
				//if(DataLoad.IdoMagATK01) { document.getElementById("ID0" + Count01 + "IdoMagATK01").value = DataLoad.IdoMagATK01[Count01 - 1]; }
				//if(DataLoad.IdoMagATK02) { document.getElementById("ID0" + Count01 + "IdoMagATK02").value = DataLoad.IdoMagATK02[Count01 - 1]; }
				//if(DataLoad.IdoMagATK03) { document.getElementById("ID0" + Count01 + "IdoMagATK03").value = DataLoad.IdoMagATK03[Count01 - 1]; }
				//if(DataLoad.IdoMagATK04) { document.getElementById("ID0" + Count01 + "IdoMagATK04").value = DataLoad.IdoMagATK04[Count01 - 1]; }
				//if(DataLoad.IdoMagDEF01) { document.getElementById("ID0" + Count01 + "IdoMagDEF01").value = DataLoad.IdoMagDEF01[Count01 - 1]; }
				//if(DataLoad.IdoMagDEF02) { document.getElementById("ID0" + Count01 + "IdoMagDEF02").value = DataLoad.IdoMagDEF02[Count01 - 1]; }
				//if(DataLoad.IdoMagDEF03) { document.getElementById("ID0" + Count01 + "IdoMagDEF03").value = DataLoad.IdoMagDEF03[Count01 - 1]; }
				//if(DataLoad.IdoMagDEF04) { document.getElementById("ID0" + Count01 + "IdoMagDEF04").value = DataLoad.IdoMagDEF04[Count01 - 1]; }
				if(DataLoad.IdoMagSPD01) { document.getElementById("ID0" + Count01 + "IdoMagSPD01").value = DataLoad.IdoMagSPD01[Count01 - 1]; }
				if(DataLoad.IdoMagSPD02) { document.getElementById("ID0" + Count01 + "IdoMagSPD02").value = DataLoad.IdoMagSPD02[Count01 - 1]; }
				if(DataLoad.IdoMagSPD03) { document.getElementById("ID0" + Count01 + "IdoMagSPD03").value = DataLoad.IdoMagSPD03[Count01 - 1]; }
				if(DataLoad.IdoMagSPD04) { document.getElementById("ID0" + Count01 + "IdoMagSPD04").value = DataLoad.IdoMagSPD04[Count01 - 1]; }
			}
		LB("ID0101CharacterLB");
		DB("ID0101CharacterDB");
		TB("ID0101CharacterTB");
	}
function DataDelete()
	{
		localStorage.removeItem(document.getElementById("DataList").value);
		document.getElementById("DataList").remove(document.getElementById("DataList").selectedIndex);
		DataChange();
	}