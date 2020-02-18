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
				CharacterID: ["100000 01", "100000 01", "100000 01", "100000 01", "100000 02", "100000 02", "100000 02", "100000 02"],
				CharacterLB: ["0", "0", "0", "0", "0", "0", "0", "0"],
				CharacterD: ["0.5", "0.5", "0.5", "0.5", "0.5", "0.5", "0.5", "0.5"],
				CharacterDB: ["0", "0", "0", "0", "0", "0", "0", "0"],
				CharacterSPD: ["0", "0", "0", "0", "0", "0", "0", "0"],
				WeaponID: ["200000000", "200000000", "200000000", "200000000", "200000000", "200000000", "200000000", "200000000"],
				WeaponSPD: ["0", "0", "0", "0", "0", "0", "0", "0"],
				SoulID: ["300000000", "300000000", "300000000", "300000000", "300000000", "300000000", "300000000", "300000000"],
				SoulSPD: ["0", "0", "0", "0", "0", "0", "0", "0"],
				SupportSPD: ["0", "0", "0", "0", "0", "0", "0", "0"],
				IdoMagID: ["12700000 00", "12700000 00"],
				IdoMagSPD: ["0", "0"],
				IdoMagSPD01: ["0", "0"],
				IdoMagSPD02: ["0", "0"],
				IdoMagSPD03: ["0", "0"],
				IdoMagSPD04: ["0", "0"],
				IdoMagELE01: ["0", "0"],
				IdoMagELE02: ["0", "0"],
				IdoMagELE03: ["0", "0"],
				IdoMagELE04: ["0", "0"]
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
				SelectParty("ID" + DataLoad.Party);
				for(var Count01 = 1; Count01 < 3; Count01 ++)
					{
						for(var Count02 = 1; Count02 < 5; Count02 ++)
							{
								IDCurr = "0" + Count01 + "0" + Count02;
								SelectCharacter(DataLoad.CharacterID[(Count01 == 1) ? Count02 - 1 : Count02 + 3]);
								document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterLB").value = DataLoad.CharacterLB[(Count01 == 1) ? Count02 - 1 : Count02 + 3];
								document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterD").style.opacity = DataLoad.CharacterD[(Count01 == 1) ? Count02 - 1 : Count02 + 3];
								document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterDB").value = DataLoad.CharacterDB[(Count01 == 1) ? Count02 - 1 : Count02 + 3];
								document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterSPD").value = DataLoad.CharacterSPD[(Count01 == 1) ? Count02 - 1 : Count02 + 3];
								SelectWeapon(DataLoad.WeaponID[(Count01 == 1) ? Count02 - 1 : Count02 + 3]);
								document.getElementById("ID0" + Count01 + "0" + Count02 + "WeaponSPD").value = DataLoad.WeaponSPD[(Count01 == 1) ? Count02 - 1 : Count02 + 3];
								SelectSoul(DataLoad.SoulID[(Count01 == 1) ? Count02 - 1 : Count02 + 3]);
								document.getElementById("ID0" + Count01 + "0" + Count02 + "SoulSPD").value = DataLoad.SoulSPD[(Count01 == 1) ? Count02 - 1 : Count02 + 3];
								document.getElementById("ID0" + Count01 + "0" + Count02 + "SupportSPD").value = DataLoad.SupportSPD[(Count01 == 1) ? Count02 - 1 : Count02 + 3];
							}
						IDCurr = "0" + Count01;
						SelectIdoMag(DataLoad.IdoMagID[Count01 - 1]);
						document.getElementById("ID0" + Count01 + "IdoMagSPD").value = DataLoad.IdoMagSPD[Count01 - 1];
						document.getElementById("ID0" + Count01 + "IdoMagSPD01").value = DataLoad.IdoMagSPD01[Count01 - 1];
						document.getElementById("ID0" + Count01 + "IdoMagSPD02").value = DataLoad.IdoMagSPD02[Count01 - 1];
						document.getElementById("ID0" + Count01 + "IdoMagSPD03").value = DataLoad.IdoMagSPD03[Count01 - 1];
						document.getElementById("ID0" + Count01 + "IdoMagSPD04").value = DataLoad.IdoMagSPD04[Count01 - 1];
						document.getElementById("ID0" + Count01 + "IdoMagELE01").value = DataLoad.IdoMagELE01[Count01 - 1];
						document.getElementById("ID0" + Count01 + "IdoMagELE02").value = DataLoad.IdoMagELE02[Count01 - 1];
						document.getElementById("ID0" + Count01 + "IdoMagELE03").value = DataLoad.IdoMagELE03[Count01 - 1];
						document.getElementById("ID0" + Count01 + "IdoMagELE04").value = DataLoad.IdoMagELE04[Count01 - 1];
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
				for(var Count02 = 1; Count02 < 5; Count02 ++)
					{
						document.getElementById("ID0" + Count01 + "IdoMagELEIMG0" + Count02).style.display = (ID == ("ID0" + Count01)) ? "inline" : "none";
						document.getElementById("ID0" + Count01 + "IdoMagELE0" + Count02).style.display = (ID == ("ID0" + Count01)) ? "inline" : "none";
						document.getElementById("ID0" + Count01 + "ELE0" + Count02 + "Total").style.display = (ID == ("ID0" + Count01)) ? "inline" : "none";
					}
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
				if(["0", Select].indexOf(Characters[Count].charAt(8)) != -1 || ["100001 00", "100001 11", "100001 12"].indexOf(Characters[Count]) != -1)
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
		document.getElementById("ID" + IDCurr + "Element").style.display = (["100000 01", "100000 02"].indexOf(ID) != -1) ? "none" : "inline";
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
		Element("ID01IdoMagELE01");
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
		Element("ID01IdoMagELE01");
	}
function SelectDB(ID)
	{
		document.getElementById(ID).style.opacity = (document.getElementById(ID).style.opacity == "1") ? "0.5" : "1";
		DB("ID0101CharacterDB");
	}
function LB(ID)
	{
		if(document.getElementById(ID).value == "") { document.getElementById(ID).value = document.getElementById(ID).min; }
		if(parseFloat(document.getElementById(ID).value) < parseFloat(document.getElementById(ID).min)) { document.getElementById(ID).value = document.getElementById(ID).min; }
		if(parseFloat(document.getElementById(ID).value) > parseFloat(document.getElementById(ID).max)) { document.getElementById(ID).value = document.getElementById(ID).max; }
		for(var Count01 = 1; Count01 < 3; Count01 ++)
			{
				for(var Count02 = 1; Count02 < 5; Count02 ++)
					{
						Data.CharacterLB[(Count01 == 1) ? Count02 - 1 : Count02 + 3] = document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterLB").value;
					}
			}
		Element("ID01IdoMagELE01");
		CharacterSpeed();
	}
function DB(ID)
	{
		if(ID != "")
			{
				if(document.getElementById(ID).value == "") { document.getElementById(ID).value = document.getElementById(ID).min; }
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
		CharacterSpeed();
	}
function Element(ID)
	{
		if(document.getElementById(ID).value == "") { document.getElementById(ID).value = document.getElementById(ID).min; }
		if(parseFloat(document.getElementById(ID).value) < parseFloat(document.getElementById(ID).min)) { document.getElementById(ID).value = document.getElementById(ID).min; }
		if(parseFloat(document.getElementById(ID).value) > parseFloat(document.getElementById(ID).max)) { document.getElementById(ID).value = document.getElementById(ID).max; }
		for(var Count01 = 1; Count01 < 3; Count01 ++)
			{
				var ELE01 = 1 + parseInt(document.getElementById("ID0" + Count01 + "IdoMagELE01").value);
				var ELE02 = 1 + parseInt(document.getElementById("ID0" + Count01 + "IdoMagELE02").value);
				var ELE03 = 1 + parseInt(document.getElementById("ID0" + Count01 + "IdoMagELE03").value);
				var ELE04 = 1 + parseInt(document.getElementById("ID0" + Count01 + "IdoMagELE04").value);
				for(var Count02 = 1; Count02 < 5; Count02 ++)
					{
						ELE01 += (document.getElementById("ID0" + Count01 + "0" + Count02 + "Element").src.includes("PNG/UI/ELE01.png")) ? (0.25 * parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterLB").value)) : 0 ;
						ELE02 += (document.getElementById("ID0" + Count01 + "0" + Count02 + "Element").src.includes("PNG/UI/ELE02.png")) ? (0.25 * parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterLB").value)) : 0 ;
						ELE03 += (document.getElementById("ID0" + Count01 + "0" + Count02 + "Element").src.includes("PNG/UI/ELE03.png")) ? (0.25 * parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterLB").value)) : 0 ;
						ELE04 += (document.getElementById("ID0" + Count01 + "0" + Count02 + "Element").src.includes("PNG/UI/ELE04.png")) ? (0.25 * parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterLB").value)) : 0 ;
					}
				if(ELE01 > 10) { ELE01 = 10; }
				if(ELE02 > 10) { ELE02 = 10; }
				if(ELE03 > 10) { ELE03 = 10; }
				if(ELE04 > 10) { ELE04 = 10; }
				document.getElementById("ID0" + Count01 + "ELE01Total").innerHTML = ELE01;
				document.getElementById("ID0" + Count01 + "ELE02Total").innerHTML = ELE02;
				document.getElementById("ID0" + Count01 + "ELE03Total").innerHTML = ELE03;
				document.getElementById("ID0" + Count01 + "ELE04Total").innerHTML = ELE04;
				Data.IdoMagELE01[Count01 - 1] = document.getElementById("ID0" + Count01 + "IdoMagELE01").value;
				Data.IdoMagELE02[Count01 - 1] = document.getElementById("ID0" + Count01 + "IdoMagELE02").value;
				Data.IdoMagELE03[Count01 - 1] = document.getElementById("ID0" + Count01 + "IdoMagELE03").value;
				Data.IdoMagELE04[Count01 - 1] = document.getElementById("ID0" + Count01 + "IdoMagELE04").value;
			}
	}
function CharacterSpeed()
	{
		for(var Count01 = 1; Count01 < 3; Count01 ++)
			{
				for(var Count02 = 1; Count02 < 5; Count02 ++)
					{
						var ID = Data.CharacterID[(Count01 == 1) ? Count02 - 1 : Count02 + 3].substring(0, 6);
						if(ID in CharacterSPD)
							{
								if(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterDB").style.display == "none")
									{
										document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterSPD").value = CharacterSPD[ID][document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterLB").value * 10];
									}
								else
									{
										document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterSPD").value = CharacterSPD[ID][(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterLB").value * 10) + 1 + parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterDB").value)];
									}
								document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterSPD").disabled = true;
							}
						else
							{
								document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterSPD").value = 0;
								document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterSPD").disabled = false;
							}
					}
			}
		Speed("ID0101CharacterSPD");
	}
function Speed(ID)
	{
		if(document.getElementById(ID).value == "") { document.getElementById(ID).value = document.getElementById(ID).min; }
		if(parseFloat(document.getElementById(ID).value) < parseFloat(document.getElementById(ID).min)) { document.getElementById(ID).value = document.getElementById(ID).min; }
		if(parseFloat(document.getElementById(ID).value) > parseFloat(document.getElementById(ID).max)) { document.getElementById(ID).value = document.getElementById(ID).max; }
		for(var Count01 = 1; Count01 < 3; Count01 ++)
			{
				var SPDOrder = [["01", 0], ["02", 0], ["03", 0], ["04", 0]];
				for(var Count02 = 1; Count02 < 5; Count02 ++)
					{
						var SPD = parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterSPD").value);
						SPD += parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "WeaponSPD").value);
						SPD += parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "SoulSPD").value);
						SPD += parseInt(document.getElementById("ID0" + Count01 + "IdoMagSPD").value);
						SPD += document.getElementById("ID0" + Count01 + "0" + Count02 + "Element").src.includes("PNG/UI/ELE01.png") ? parseInt(document.getElementById("ID0" + Count01 + "IdoMagSPD01").value) : 0;
						SPD += document.getElementById("ID0" + Count01 + "0" + Count02 + "Element").src.includes("PNG/UI/ELE02.png") ? parseInt(document.getElementById("ID0" + Count01 + "IdoMagSPD02").value) : 0;
						SPD += document.getElementById("ID0" + Count01 + "0" + Count02 + "Element").src.includes("PNG/UI/ELE03.png") ? parseInt(document.getElementById("ID0" + Count01 + "IdoMagSPD03").value) : 0;
						SPD += document.getElementById("ID0" + Count01 + "0" + Count02 + "Element").src.includes("PNG/UI/ELE04.png") ? parseInt(document.getElementById("ID0" + Count01 + "IdoMagSPD04").value) : 0;
						SPD *= (100 + parseInt(document.getElementById("ID0" + Count01 + "0" + Count02 + "SupportSPD").value)) / 100;
						SPDOrder[Count02 - 1][1] = parseFloat(SPD.toFixed(4));
						var SPDTXT = SPD.toFixed(2);
						if(SPDTXT.substring(SPDTXT.length - 3) == ".00")
							{
								SPDTXT = SPD.toFixed(0);
							}
						document.getElementById("ID0" + Count01 + "0" + Count02 + "SPD").innerHTML = SPDTXT;
						Data.CharacterSPD[(Count01 == 1) ? Count02 - 1 : Count02 + 3] = document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterSPD").value;
						Data.WeaponSPD[(Count01 == 1) ? Count02 - 1 : Count02 + 3] = document.getElementById("ID0" + Count01 + "0" + Count02 + "WeaponSPD").value;
						Data.SoulSPD[(Count01 == 1) ? Count02 - 1 : Count02 + 3] = document.getElementById("ID0" + Count01 + "0" + Count02 + "SoulSPD").value;
						Data.SupportSPD[(Count01 == 1) ? Count02 - 1 : Count02 + 3] = document.getElementById("ID0" + Count01 + "0" + Count02 + "SupportSPD").value;
						Data.IdoMagSPD[Count01 - 1] = document.getElementById("ID0" + Count01 + "IdoMagSPD").value;
						Data.IdoMagSPD01[Count01 - 1] = document.getElementById("ID0" + Count01 + "IdoMagSPD01").value;
						Data.IdoMagSPD02[Count01 - 1] = document.getElementById("ID0" + Count01 + "IdoMagSPD02").value;
						Data.IdoMagSPD03[Count01 - 1] = document.getElementById("ID0" + Count01 + "IdoMagSPD03").value;
						Data.IdoMagSPD04[Count01 - 1] = document.getElementById("ID0" + Count01 + "IdoMagSPD04").value;
					}
				SPDOrder.sort(function(a, b) { return b[1] - a[1]; } );
				document.getElementById("ID0" + Count01 + SPDOrder[0][0] + "SPDOrder").innerHTML = "1ST";
				document.getElementById("ID0" + Count01 + SPDOrder[1][0] + "SPDOrder").innerHTML = "2ND";
				document.getElementById("ID0" + Count01 + SPDOrder[2][0] + "SPDOrder").innerHTML = "3RD";
				document.getElementById("ID0" + Count01 + SPDOrder[3][0] + "SPDOrder").innerHTML = "4TH";
			}
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
		SelectParty("ID" + DataLoad.Party);
		for(var Count01 = 1; Count01 < 3; Count01 ++)
			{
				for(var Count02 = 1; Count02 < 5; Count02 ++)
					{
						IDCurr = "0" + Count01 + "0" + Count02;
						SelectCharacter(DataLoad.CharacterID[(Count01 == 1) ? Count02 - 1 : Count02 + 3]);
						document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterLB").value = DataLoad.CharacterLB[(Count01 == 1) ? Count02 - 1 : Count02 + 3];
						document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterD").style.opacity = DataLoad.CharacterD[(Count01 == 1) ? Count02 - 1 : Count02 + 3];
						document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterDB").value = DataLoad.CharacterDB[(Count01 == 1) ? Count02 - 1 : Count02 + 3];
						document.getElementById("ID0" + Count01 + "0" + Count02 + "CharacterSPD").value = DataLoad.CharacterSPD[(Count01 == 1) ? Count02 - 1 : Count02 + 3];
						SelectWeapon(DataLoad.WeaponID[(Count01 == 1) ? Count02 - 1 : Count02 + 3]);
						document.getElementById("ID0" + Count01 + "0" + Count02 + "WeaponSPD").value = DataLoad.WeaponSPD[(Count01 == 1) ? Count02 - 1 : Count02 + 3];
						SelectSoul(DataLoad.SoulID[(Count01 == 1) ? Count02 - 1 : Count02 + 3]);
						document.getElementById("ID0" + Count01 + "0" + Count02 + "SoulSPD").value = DataLoad.SoulSPD[(Count01 == 1) ? Count02 - 1 : Count02 + 3];
						document.getElementById("ID0" + Count01 + "0" + Count02 + "SupportSPD").value = DataLoad.SupportSPD[(Count01 == 1) ? Count02 - 1 : Count02 + 3];
					}
				IDCurr = "0" + Count01;
				SelectIdoMag(DataLoad.IdoMagID[Count01 - 1]);
				document.getElementById("ID0" + Count01 + "IdoMagSPD").value = DataLoad.IdoMagSPD[Count01 - 1];
				document.getElementById("ID0" + Count01 + "IdoMagSPD01").value = DataLoad.IdoMagSPD01[Count01 - 1];
				document.getElementById("ID0" + Count01 + "IdoMagSPD02").value = DataLoad.IdoMagSPD02[Count01 - 1];
				document.getElementById("ID0" + Count01 + "IdoMagSPD03").value = DataLoad.IdoMagSPD03[Count01 - 1];
				document.getElementById("ID0" + Count01 + "IdoMagSPD04").value = DataLoad.IdoMagSPD04[Count01 - 1];
				document.getElementById("ID0" + Count01 + "IdoMagELE01").value = DataLoad.IdoMagELE01[Count01 - 1];
				document.getElementById("ID0" + Count01 + "IdoMagELE02").value = DataLoad.IdoMagELE02[Count01 - 1];
				document.getElementById("ID0" + Count01 + "IdoMagELE03").value = DataLoad.IdoMagELE03[Count01 - 1];
				document.getElementById("ID0" + Count01 + "IdoMagELE04").value = DataLoad.IdoMagELE04[Count01 - 1];
			}
		LB("ID0101CharacterLB");
		DB("ID0101CharacterDB");
	}
function DataDelete()
	{
		localStorage.removeItem(document.getElementById("DataList").value);
		document.getElementById("DataList").remove(document.getElementById("DataList").selectedIndex);
		DataChange();
	}