var CharacterSlotCurr;
var CharacterSlotPrev;
var LeftMargin;
var RightMargin;
var RightBool = false;
function Start()
	{
		
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