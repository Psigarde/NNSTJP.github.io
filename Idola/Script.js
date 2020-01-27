var Characters = ["100001 00", "100001 11", "100001 12", "100002 01", "100002 11", "100002 12", "100003 00", "100003 10", "100003 12", "100004 00", "100004 11", "100004 12", "100005 02", "100005 11", "100005 12", "100006 01", "100006 11", "100006 12", "100007 01", "100007 11", "100007 12", "100008 02", "100008 11", "100008 12", "100009 01", "100009 11", "100009 12", "100010 02", "100010 11", "100010 12", "100011 01", "100011 11", "100011 12", "100012 00", "100012 10", "100012 12", "100013 02", "100013 11", "100013 12", "100014 01", "100014 11", "100014 12", "100015 02", "100015 11", "100015 12", "100016 02", "100016 11", "100016 12", "100017 02", "100017 11", "100017 12", "100018 02", "100018 11", "100018 12", "100019 02", "100019 11", "100019 12", "100020 01", "100020 11", "100020 12", "100021 01", "100021 11", "100021 12", "100022 01", "100022 11", "100022 12", "100023 02", "100023 11", "100023 12", "100024 01", "100024 11", "100024 12", "100025 01", "100025 11", "100025 12", "100026 02", "100026 11", "100026 12", "100027 02", "100027 11", "100027 12", "100028 02", "100028 11", "100028 12", "100029 02", "100029 11", "100029 12", "100030 01", "100030 11", "100030 12", "100031 01", "100031 11", "100031 12", "100032 00", "100032 10", "100032 12", "100033 01", "100033 11", "100033 12", "100034 01", "100034 11", "100034 12", "100035 01", "100035 11", "100035 12", "100036 02", "100036 11", "100036 12", "100037 01", "100037 11", "100037 12", "100038 00", "100038 11", "100038 12", "100039 02", "100039 11", "100039 12", "100040 00", "100040 11", "100040 12", "100041 01", "100041 11", "100041 12", "100042 02", "100042 11", "100042 12", "100043 02", "100043 11", "100043 12", "100044 02", "100044 11", "100044 12", "100045 00", "100045 10", "100045 12", "100046 01", "100046 11", "100046 12", "100047 01", "100047 11", "100047 12", "100048 02", "100048 11", "100048 12", "100049 01", "100049 11", "100049 12", "100050 00", "100050 10", "100050 11", "100051 02", "100051 11", "100051 12", "100052 00", "100052 11", "100052 12", "100053 02", "100053 11", "100053 12", "100055 01", "100055 11", "100055 12", "100056 02", "100056 11", "100056 12", "100057 02", "100057 11", "100057 12", "100058 00", "100058 10", "100058 11", "100059 00", "100059 11", "100059 12", "100060 00", "100060 10", "100060 12", "100061 01", "100061 11", "100061 12", "100063 00", "100063 11", "100063 12", "100069 00", "100069 10", "100069 12", "100070 00", "100070 10", "100070 12", "100071 00", "100071 10", "100071 12", "100074 00", "100074 11", "100074 12", "100075 01", "100075 11", "100075 12", "100077 02", "100077 11", "100077 12", "100079 00", "101007 01", "101007 11", "101007 12", "102002 01", "102002 11", "102002 12", "104002 01", "104002 11", "104002 12", "104012 00", "104012 10", "104012 12", "104053 02", "104053 11", "104053 12", "106019 02", "106019 11", "106019 12", "107034 01", "107034 11", "107034 12", "108002 01", "108002 11", "108002 12", "108007 01", "108007 11", "108007 12", "191002 01", "191002 11", "191002 12", "191017 02", "191017 11", "191017 12", "191018 02", "191018 11", "191018 12", "191022 01", "191022 11", "191022 12", "191044 02", "191044 11", "191044 12", "191045 00", "191045 10", "191045 12", "191053 02", "191053 11", "191053 12", "191056 02", "191056 11", "191056 12"];
var CharacterSlotCurr;
var CharacterSlotPrev;
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
	}
function Resize()
	{
		if(RightBool)
			{
				document.getElementById("SelectCharacterList02").style.transition = "0s";
				RightMargin = window.innerWidth - parseInt(window.getComputedStyle(document.getElementById("SelectCharacterList02")).getPropertyValue("width"));
				document.getElementById("SelectCharacterList02").style.marginLeft = RightMargin;
			}
	}
function SelectCharacterList(Slot)
	{
		CharacterSlotCurr = Slot;
		if(Slot != CharacterSlotPrev)
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
		SelectCharacterDone();
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