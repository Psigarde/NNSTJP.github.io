var Characters = ["100000 01", "100000 02", "100001 00", "100001 11", "100001 12", "100002 01", "100002 11", "100002 12", "100003 00", "100003 10", "100003 12", "100004 00", "100004 11", "100004 12", "100005 02", "100005 11", "100005 12", "100006 01", "100006 11", "100006 12", "100007 01", "100007 11", "100007 12", "100008 02", "100008 11", "100008 12", "100009 01", "100009 11", "100009 12", "100010 02", "100010 11", "100010 12", "100011 01", "100011 11", "100011 12", "100012 00", "100012 10", "100012 12", "100013 02", "100013 11", "100013 12", "100014 01", "100014 11", "100014 12", "100015 02", "100015 11", "100015 12", "100016 02", "100016 11", "100016 12", "100017 02", "100017 11", "100017 12", "100018 02", "100018 11", "100018 12", "100019 02", "100019 11", "100019 12", "100020 01", "100020 11", "100020 12", "100021 01", "100021 11", "100021 12", "100022 01", "100022 11", "100022 12", "100023 02", "100023 11", "100023 12", "100024 01", "100024 11", "100024 12", "100025 01", "100025 11", "100025 12", "100026 02", "100026 11", "100026 12", "100027 02", "100027 11", "100027 12", "100028 02", "100028 11", "100028 12", "100029 02", "100029 11", "100029 12", "100030 01", "100030 11", "100030 12", "100031 01", "100031 11", "100031 12", "100032 00", "100032 10", "100032 12", "100033 01", "100033 11", "100033 12", "100034 01", "100034 11", "100034 12", "100035 01", "100035 11", "100035 12", "100036 02", "100036 11", "100036 12", "100037 01", "100037 11", "100037 12", "100038 00", "100038 11", "100038 12", "100039 02", "100039 11", "100039 12", "100040 00", "100040 11", "100040 12", "100041 01", "100041 11", "100041 12", "100042 02", "100042 11", "100042 12", "100043 02", "100043 11", "100043 12", "100044 02", "100044 11", "100044 12", "100045 00", "100045 10", "100045 12", "100046 01", "100046 11", "100046 12", "100047 01", "100047 11", "100047 12", "100048 02", "100048 11", "100048 12", "100049 01", "100049 11", "100049 12", "100050 00", "100050 10", "100050 11", "100051 02", "100051 11", "100051 12", "100052 00", "100052 11", "100052 12", "100053 02", "100053 11", "100053 12", "100055 01", "100055 11", "100055 12", "100056 02", "100056 11", "100056 12", "100057 02", "100057 11", "100057 12", "100058 00", "100058 10", "100058 11", "100059 00", "100059 11", "100059 12", "100060 00", "100060 10", "100060 12", "100061 01", "100061 11", "100061 12", "100063 00", "100063 11", "100063 12", "100069 00", "100069 10", "100069 12", "100070 00", "100070 10", "100070 12", "100071 00", "100071 10", "100071 12", "100074 00", "100074 11", "100074 12", "100075 01", "100075 11", "100075 12", "100077 02", "100077 11", "100077 12", "100079 00", "101007 01", "101007 11", "101007 12", "102002 01", "102002 11", "102002 12", "104002 01", "104002 11", "104002 12", "104012 00", "104012 10", "104012 12", "104053 02", "104053 11", "104053 12", "106019 02", "106019 11", "106019 12", "107034 01", "107034 11", "107034 12", "108002 01", "108002 11", "108002 12", "108007 01", "108007 11", "108007 12", "191002 01", "191002 11", "191002 12", "191017 02", "191017 11", "191017 12", "191018 02", "191018 11", "191018 12", "191022 01", "191022 11", "191022 12", "191044 02", "191044 11", "191044 12", "191045 00", "191045 10", "191045 12", "191053 02", "191053 11", "191053 12", "191056 02", "191056 11", "191056 12"];
var Weapons = ["200000000", "201000001" , "201000002" , "201000003" , "201000004" , "201000005" , "201000006" , "201000007" , "201000008" , "201000009" , "201000010" , "202000001" , "202000002" , "202000003" , "202000004" , "202000005" , "202000006" , "202000007" , "202000008" , "203000001" , "203000002" , "203000003" , "203000004" , "203000005" , "203000006" , "203000007" , "203000008" , "203000009" , "203000010" , "204000001" , "204000002" , "204000003" , "204000004" , "204000005" , "204000006" , "204000007" , "204000008" , "204000009" , "204000010" , "204000011" , "204000012" , "204000013" , "204000015" , "204000016" , "204000017" , "205000001" , "205000002" , "205000003" , "205000004" , "205000005" , "205000006" , "205000007" , "205000008" , "205000009" , "205000010" , "205000011" , "205000012" , "205000013" , "205000014" , "205000015" , "205000016" , "205000017" , "205000018" , "205000019" , "205000021" , "205000022" , "205000023" , "205000024" , "205000025" , "205000029" , "205000030" , "205000033" , "205000035" , "205000036" , "205000037" , "205000038" , "205000039" , "205000040" , "205000041" , "205000042" , "205000043" , "205000044" , "206000001" , "206000002" , "206000003" , "206000004" , "206000005" , "206000006" , "206000007" , "206000008" , "206000009" , "206000010" , "206000011" , "206000012" , "206000013" , "206000014" , "206000015" , "206000016" , "206000017" , "206000018" , "206000019" , "206000020" , "206000021" , "206000022" , "206000023" , "206000024" , "206000025" , "206000026" , "206000027" , "206000028" , "206000029" , "206000030" , "206000031" , "206000032" , "206000033" , "206000034" , "206000035" , "206000036" , "206000037" , "206000038" , "206000039" , "206000040" , "206000041" , "206000042"];
var Souls = ["300000000", "303000001", "303000002", "303000003", "303000004", "303000005", "303000006", "303000007", "303000008", "303000009", "303000010", "303000011", "303000012", "303000013", "303000014", "303000015", "304000001", "304000002", "304000003", "304000004", "304000005", "304000007", "304000008", "304000009", "304000010", "304000011", "304000012", "304000013", "304000020", "304000021", "304000022", "304000023", "304000024", "304000025", "304000026", "304000027", "305000001", "305000002", "305000003", "305000004", "305000005", "305000006", "305000007", "305000008", "305000009", "305000010", "305000011", "305000012", "305000013", "305000014", "305000015", "305000016", "305000018", "305000019", "305000020", "305000021", "305000022", "305000023", "305000024", "305000025", "305000026", "305000027", "305000028", "305000029", "305000030", "305000031", "305000033", "305000034", "305000036", "305000037", "305000038", "305000039", "305000040", "305000041", "305000042", "305000043", "305000044", "305000045", "305000046", "305000047", "305000048", "305000050", "305000051", "305000052", "305000053", "305000054", "305000055", "305000056", "305000057", "305000058", "305000059", "305000060", "305000062", "305000063", "305000064", "305000065", "306000001", "306000002", "306000003", "306000004", "306000005", "306000006", "306000007", "306000008", "306000009", "306000010", "306000011", "306000012", "306000013", "306000014", "306000015", "306000016", "306000017", "306000018", "306000019", "306000020", "306000021", "306000022", "306000023", "306000024", "306000025", "306000026", "306000027", "306000028"];
var CharacterSlotCurr;
var CharacterSlotPrev;
var SymbolSlotCurr;
var SymbolSlotPrev;
var LeftMargin;
var RightMargin;
var RightBool = false;
function Start()
	{
		var CountL = 0;
		var CountC = 0;
		for(var Count = 0; Count < Characters.length; Count ++)
			{
				if(Characters[Count].charAt(8) == "0" || Characters[Count] == "100001 00" || Characters[Count] == "100001 11" || Characters[Count] == "100001 12")
					{
						document.getElementById("SelectCharacterList01").innerHTML += "<img class='SelectCharacterIMG' src='PNG/Character Icon/" + Characters[Count] + ".png' id='" + Characters[Count] + "' onClick='SelectCharacter(this.id)'>";
						CountL ++;
						document.getElementById("SelectCharacterList02").innerHTML += "<img class='SelectCharacterIMG' src='PNG/Character Icon/" + Characters[Count] + ".png' id='" + Characters[Count] + "' onClick='SelectCharacter(this.id)'>";
						CountC ++;
						if(CountL % 6 == 0)
							{
								document.getElementById("SelectCharacterList01").innerHTML += "<BR>";
							}
						if(CountC % 6 == 0)
							{
								document.getElementById("SelectCharacterList02").innerHTML += "<BR>";
							}
					}
				else if(Characters[Count].charAt(8) == "1")
					{
						document.getElementById("SelectCharacterList01").innerHTML += "<img class='SelectCharacterIMG' src='PNG/Character Icon/" + Characters[Count] + ".png' id='" + Characters[Count] + "' onClick='SelectCharacter(this.id)'>";
						CountL ++;
						if(CountL % 6 == 0)
							{
								document.getElementById("SelectCharacterList01").innerHTML += "<BR>";
							}
					}
				else if(Characters[Count].charAt(8) == "2")
					{
						document.getElementById("SelectCharacterList02").innerHTML += "<img class='SelectCharacterIMG' src='PNG/Character Icon/" + Characters[Count] + ".png' id='" + Characters[Count] + "' onClick='SelectCharacter(this.id)'>";
						CountC ++;
						if(CountC % 6 == 0)
							{
								document.getElementById("SelectCharacterList02").innerHTML += "<BR>";
							}
					}
			}
		var CountW = 0;
		for(var Count = 0; Count < Weapons.length; Count ++)
			{
				document.getElementById("SelectWeaponList").innerHTML += "<img class='SelectSymbolIMG' src='PNG/Weapon Icon/" + Weapons[Count] + ".png' id='" + Weapons[Count] + "' onClick='SelectWeapon(this.id)'>";
				CountW ++;
				if(CountW % 6 == 0)
					{
						document.getElementById("SelectWeaponList").innerHTML += "<BR>";
					}
			}
		var CountS = 0;
		for(var Count = 0; Count < Souls.length; Count ++)
			{
				document.getElementById("SelectSoulList").innerHTML += "<img class='SelectSymbolIMG' src='PNG/Soul Icon/" + Souls[Count] + ".png' id='" + Souls[Count] + "' onClick='SelectSoul(this.id)'>";
				CountS ++;
				if(CountS % 6 == 0)
					{
						document.getElementById("SelectSoulList").innerHTML += "<BR>";
					}
			}
	}
function Resize()
	{
		if(RightBool)
			{
				document.getElementById("SelectCharacterList02").style.transition = "0s";
				document.getElementById("SelectSoulList").style.transition = "0s";
				RightMargin = window.innerWidth - parseInt(window.getComputedStyle(document.getElementById("SelectCharacterList02")).getPropertyValue("width")) - 8;
				document.getElementById("SelectCharacterList02").style.marginLeft = RightMargin;
				document.getElementById("SelectSoulList").style.marginLeft = RightMargin;
			}
	}
function SelectCharacterList(Slot)
	{
		SelectSymbolDone();
		SelectBorder();
		CharacterSlotCurr = Slot;
		if(CharacterSlotCurr != CharacterSlotPrev)
			{
				if(Slot == "Character0101" || Slot == "Character0102" || Slot == "Character0103" || Slot == "Character0104")
					{
						document.getElementById("SelectCharacterList01").style.marginLeft = "0px";
						RightBool = false;
						document.getElementById("SelectCharacterList02").style.transition = "0.5s";
						document.getElementById("SelectCharacterList02").style.marginLeft = "100%";
					}
				else
					{
						LeftMargin = - 8 - parseInt(window.getComputedStyle(document.getElementById("SelectCharacterList01")).getPropertyValue("width"));
						document.getElementById("SelectCharacterList01").style.marginLeft = LeftMargin;
						RightBool = true;
						document.getElementById("SelectCharacterList02").style.transition = "0.5s";
						RightMargin = window.innerWidth - parseInt(window.getComputedStyle(document.getElementById("SelectCharacterList02")).getPropertyValue("width")) - 8;
						document.getElementById("SelectCharacterList02").style.marginLeft = RightMargin;
					}
				CharacterSlotPrev = Slot;
				document.getElementById(Slot).style.border = "2px solid rgba(255, 64, 64, 1)";
			}
		else
			{
				SelectCharacterDone();
			}
	}
function SelectCharacter(ID)
	{
		document.getElementById(CharacterSlotCurr).src = "PNG/Character Icon/" + ID + ".png";
		if(ID.charAt(7) == "0")
			{
				document.getElementById(CharacterSlotCurr + "Destiny").style.display = "none";
			}
		else
			{
				document.getElementById(CharacterSlotCurr + "Destiny").style.display = "inline";
			}
	}
function SelectCharacterDone()
	{
		LeftMargin = - 8 - parseInt(window.getComputedStyle(document.getElementById("SelectCharacterList01")).getPropertyValue("width"));
		document.getElementById("SelectCharacterList01").style.marginLeft = LeftMargin;
		RightBool = false;
		document.getElementById("SelectCharacterList02").style.transition = "0.5s";
		document.getElementById("SelectCharacterList02").style.marginLeft = "100%";
		CharacterSlotPrev = "";
	}
function SelectSymbolList(Slot)
	{
		SelectCharacterDone();
		SelectBorder();
		SymbolSlotCurr = Slot.replace("Weapon", "").replace("Soul", "");
		if(SymbolSlotCurr != SymbolSlotPrev)
			{
				document.getElementById("SelectWeaponList").style.marginLeft = "0px";
				RightBool = true;
				document.getElementById("SelectSoulList").style.transition = "0.5s";
				RightMargin = window.innerWidth - parseInt(window.getComputedStyle(document.getElementById("SelectSoulList")).getPropertyValue("width")) - 8;
				document.getElementById("SelectSoulList").style.marginLeft = RightMargin;
				SymbolSlotPrev = Slot.replace("Weapon", "").replace("Soul", "");
				document.getElementById("Weapon" + SymbolSlotCurr).style.border = "2px solid rgba(255, 64, 64, 1)";
				document.getElementById("Soul" + SymbolSlotCurr).style.border = "2px solid rgba(255, 64, 64, 1)";
			}
		else
			{
				SelectSymbolDone();
			}
	}
function SelectWeapon(ID)
	{
		document.getElementById("Weapon" + SymbolSlotCurr).src = "PNG/Weapon Icon/" + ID + ".png";
	}
function SelectSoul(ID)
	{
		document.getElementById("Soul" + SymbolSlotCurr).src = "PNG/Soul Icon/" + ID + ".png";
	}
function SelectSymbolDone()
	{
		LeftMargin = - 8 - parseInt(window.getComputedStyle(document.getElementById("SelectWeaponList")).getPropertyValue("width"));
		document.getElementById("SelectWeaponList").style.marginLeft = LeftMargin;
		RightBool = false;
		document.getElementById("SelectSoulList").style.transition = "0.5s";
		document.getElementById("SelectSoulList").style.marginLeft = "100%";
		SymbolSlotPrev = "";
	}
function SelectBorder()
	{
		document.getElementById("Character0101").style.border = "2px solid rgba(255, 64, 64, 0)";
		document.getElementById("Character0102").style.border = "2px solid rgba(255, 64, 64, 0)";
		document.getElementById("Character0103").style.border = "2px solid rgba(255, 64, 64, 0)";
		document.getElementById("Character0104").style.border = "2px solid rgba(255, 64, 64, 0)";
		document.getElementById("Character0201").style.border = "2px solid rgba(255, 64, 64, 0)";
		document.getElementById("Character0202").style.border = "2px solid rgba(255, 64, 64, 0)";
		document.getElementById("Character0203").style.border = "2px solid rgba(255, 64, 64, 0)";
		document.getElementById("Character0204").style.border = "2px solid rgba(255, 64, 64, 0)";
		document.getElementById("Weapon0101").style.border = "2px solid rgba(255, 64, 64, 0)";
		document.getElementById("Weapon0102").style.border = "2px solid rgba(255, 64, 64, 0)";
		document.getElementById("Weapon0103").style.border = "2px solid rgba(255, 64, 64, 0)";
		document.getElementById("Weapon0104").style.border = "2px solid rgba(255, 64, 64, 0)";
		document.getElementById("Weapon0201").style.border = "2px solid rgba(255, 64, 64, 0)";
		document.getElementById("Weapon0202").style.border = "2px solid rgba(255, 64, 64, 0)";
		document.getElementById("Weapon0203").style.border = "2px solid rgba(255, 64, 64, 0)";
		document.getElementById("Weapon0204").style.border = "2px solid rgba(255, 64, 64, 0)";
		document.getElementById("Soul0101").style.border = "2px solid rgba(255, 64, 64, 0)";
		document.getElementById("Soul0102").style.border = "2px solid rgba(255, 64, 64, 0)";
		document.getElementById("Soul0103").style.border = "2px solid rgba(255, 64, 64, 0)";
		document.getElementById("Soul0104").style.border = "2px solid rgba(255, 64, 64, 0)";
		document.getElementById("Soul0201").style.border = "2px solid rgba(255, 64, 64, 0)";
		document.getElementById("Soul0202").style.border = "2px solid rgba(255, 64, 64, 0)";
		document.getElementById("Soul0203").style.border = "2px solid rgba(255, 64, 64, 0)";
		document.getElementById("Soul0204").style.border = "2px solid rgba(255, 64, 64, 0)";
	}