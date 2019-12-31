var TabLeftMargin;
var TabRightBool = false;
var TabRightMargin;
function ResizeUpdate()
	{
		if(TabRightBool)
			{
				document.getElementById("TabAbout").style.transition = "0s";
				TabRightMargin = window.innerWidth - parseInt(window.getComputedStyle(document.getElementById("TabAbout")).getPropertyValue("width"));
				document.getElementById("TabAbout").style.marginLeft = TabRightMargin;
			}
	}
function TabLeft()
	{
		document.getElementById("TabClass").style.marginLeft = "0px";
		TabRightBool = false;
		document.getElementById("TabAbout").style.transition = "0.5s";
		document.getElementById("TabAbout").style.marginLeft = "100%";
	}
function TabMiddle()
	{
		TabLeftMargin = 0 - parseInt(window.getComputedStyle(document.getElementById("TabAbout")).getPropertyValue("width"));
		document.getElementById("TabClass").style.marginLeft = TabLeftMargin;
		TabRightBool = false;
		document.getElementById("TabAbout").style.transition = "0.5s";
		document.getElementById("TabAbout").style.marginLeft = "100%";
	}
function TabRight()
	{
		TabLeftMargin = 0 - parseInt(window.getComputedStyle(document.getElementById("TabAbout")).getPropertyValue("width"));
		document.getElementById("TabClass").style.marginLeft = TabLeftMargin;
		TabRightBool = true;
		document.getElementById("TabAbout").style.transition = "0.5s";
		TabRightMargin = window.innerWidth - parseInt(window.getComputedStyle(document.getElementById("TabAbout")).getPropertyValue("width"));
		document.getElementById("TabAbout").style.marginLeft = TabRightMargin;
	}
var ActiveClassM;
var ActiveClassT;
var ActiveClassS;
var TabCritList;
var CritRate;
var CritCDMG;
var CritUDMG;
var CritTDMG;
var CritEDMG;
function SetClassM(ClassM)
	{
		ActiveClassT = ClassM;
		if(ActiveClassT == ActiveClassS && ActiveClassT != "Ph" && ActiveClassT != "Et") { SetClassS(ActiveClassM); }
		ActiveClassM = ClassM;
		document.getElementById("CMHu").checked = false;
		document.getElementById("CMFi").checked = false;
		document.getElementById("CMRa").checked = false;
		document.getElementById("CMGu").checked = false;
		document.getElementById("CMFo").checked = false;
		document.getElementById("CMTe").checked = false;
		document.getElementById("CMBr").checked = false;
		document.getElementById("CMBo").checked = false;
		document.getElementById("CMSu").checked = false;
		document.getElementById("CMHr").checked = false;
		document.getElementById("CMPh").checked = false;
		document.getElementById("CMEt").checked = false;
		document.getElementById("CSHu").disabled = false;
		document.getElementById("CSFi").disabled = false;
		document.getElementById("CSRa").disabled = false;
		document.getElementById("CSGu").disabled = false;
		document.getElementById("CSFo").disabled = false;
		document.getElementById("CSTe").disabled = false;
		document.getElementById("CSBr").disabled = false;
		document.getElementById("CSBo").disabled = false;
		document.getElementById("CSSu").disabled = false;
		document.getElementById("CSPh").disabled = false;
		document.getElementById("CSEt").disabled = false;
		if(ActiveClassM == "Hu")
			{
				document.getElementById("CMHu").checked = true;
				document.getElementById("CSHu").checked = false;
				document.getElementById("CSHu").disabled = true;
			}
		if(ActiveClassM == "Fi")
			{
				document.getElementById("CMFi").checked = true;
				document.getElementById("CSFi").checked = false;
				document.getElementById("CSFi").disabled = true;
			}
		if(ActiveClassM == "Ra")
			{
				document.getElementById("CMRa").checked = true;
				document.getElementById("CSRa").checked = false;
				document.getElementById("CSRa").disabled = true;
			}
		if(ActiveClassM == "Gu")
			{
				document.getElementById("CMGu").checked = true;
				document.getElementById("CSGu").checked = false;
				document.getElementById("CSGu").disabled = true;
			}
		if(ActiveClassM == "Fo")
			{
				document.getElementById("CMFo").checked = true;
				document.getElementById("CSFo").checked = false;
				document.getElementById("CSFo").disabled = true;
			}
		if(ActiveClassM == "Te")
			{
				document.getElementById("CMTe").checked = true;
				document.getElementById("CSTe").checked = false;
				document.getElementById("CSTe").disabled = true;
			}
		if(ActiveClassM == "Br")
			{
				document.getElementById("CMBr").checked = true;
				document.getElementById("CSBr").checked = false;
				document.getElementById("CSBr").disabled = true;
			}
		if(ActiveClassM == "Bo")
			{
				document.getElementById("CMBo").checked = true;
				document.getElementById("CSBo").checked = false;
				document.getElementById("CSBo").disabled = true;
			}
		if(ActiveClassM == "Su")
			{
				document.getElementById("CMSu").checked = true;
				document.getElementById("CSSu").checked = false;
				document.getElementById("CSSu").disabled = true;
			}
		if(ActiveClassM == "Hr")
			{
				document.getElementById("CMHr").checked = true;
				document.getElementById("CSHu").checked = false;
				document.getElementById("CSFi").checked = false;
				document.getElementById("CSRa").checked = false;
				document.getElementById("CSGu").checked = false;
				document.getElementById("CSFo").checked = false;
				document.getElementById("CSTe").checked = false;
				document.getElementById("CSBr").checked = false;
				document.getElementById("CSBo").checked = false;
				document.getElementById("CSSu").checked = false;
				document.getElementById("CSPh").checked = false;
				document.getElementById("CSEt").checked = false;
				document.getElementById("CSHu").disabled = true;
				document.getElementById("CSFi").disabled = true;
				document.getElementById("CSRa").disabled = true;
				document.getElementById("CSGu").disabled = true;
				document.getElementById("CSFo").disabled = true;
				document.getElementById("CSTe").disabled = true;
				document.getElementById("CSBr").disabled = true;
				document.getElementById("CSBo").disabled = true;
				document.getElementById("CSSu").disabled = true;
				document.getElementById("CSPh").disabled = true;
				document.getElementById("CSEt").disabled = true;
				ActiveClassS = "";
			}
		if(ActiveClassM == "Ph")
			{
				document.getElementById("CMPh").checked = true;
				document.getElementById("CSHu").checked = false;
				document.getElementById("CSFi").checked = false;
				document.getElementById("CSRa").checked = false;
				document.getElementById("CSGu").checked = false;
				document.getElementById("CSFo").checked = false;
				document.getElementById("CSTe").checked = false;
				document.getElementById("CSBr").checked = false;
				document.getElementById("CSBo").checked = false;
				document.getElementById("CSSu").checked = false;
				document.getElementById("CSPh").checked = false;
				document.getElementById("CSEt").checked = false;
				document.getElementById("CSHu").disabled = true;
				document.getElementById("CSFi").disabled = true;
				document.getElementById("CSRa").disabled = true;
				document.getElementById("CSGu").disabled = true;
				document.getElementById("CSFo").disabled = true;
				document.getElementById("CSTe").disabled = true;
				document.getElementById("CSBr").disabled = true;
				document.getElementById("CSBo").disabled = true;
				document.getElementById("CSSu").disabled = true;
				document.getElementById("CSPh").disabled = true;
				document.getElementById("CSEt").disabled = true;
				ActiveClassS = "";
			}
		if(ActiveClassM == "Et")
			{
				document.getElementById("CMEt").checked = true;
				document.getElementById("CSHu").checked = false;
				document.getElementById("CSFi").checked = false;
				document.getElementById("CSRa").checked = false;
				document.getElementById("CSGu").checked = false;
				document.getElementById("CSFo").checked = false;
				document.getElementById("CSTe").checked = false;
				document.getElementById("CSBr").checked = false;
				document.getElementById("CSBo").checked = false;
				document.getElementById("CSSu").checked = false;
				document.getElementById("CSPh").checked = false;
				document.getElementById("CSEt").checked = false;
				document.getElementById("CSHu").disabled = true;
				document.getElementById("CSFi").disabled = true;
				document.getElementById("CSRa").disabled = true;
				document.getElementById("CSGu").disabled = true;
				document.getElementById("CSFo").disabled = true;
				document.getElementById("CSTe").disabled = true;
				document.getElementById("CSBr").disabled = true;
				document.getElementById("CSBo").disabled = true;
				document.getElementById("CSSu").disabled = true;
				document.getElementById("CSPh").disabled = true;
				document.getElementById("CSEt").disabled = true;
				ActiveClassS = "";
			}
		Update();
	}
function SetClassS(ClassS)
	{
		ActiveClassM = ActiveClassT;
		ActiveClassS = ClassS;
		document.getElementById("CSHu").checked = false;
		document.getElementById("CSFi").checked = false;
		document.getElementById("CSRa").checked = false;
		document.getElementById("CSGu").checked = false;
		document.getElementById("CSFo").checked = false;
		document.getElementById("CSTe").checked = false;
		document.getElementById("CSBr").checked = false;
		document.getElementById("CSBo").checked = false;
		document.getElementById("CSSu").checked = false;
		document.getElementById("CSPh").checked = false;
		document.getElementById("CSEt").checked = false;
		if(ActiveClassS == "Hu") { document.getElementById("CSHu").checked = true; }
		if(ActiveClassS == "Fi") { document.getElementById("CSFi").checked = true; }
		if(ActiveClassS == "Ra") { document.getElementById("CSRa").checked = true; }
		if(ActiveClassS == "Gu") { document.getElementById("CSGu").checked = true; }
		if(ActiveClassS == "Fo") { document.getElementById("CSFo").checked = true; }
		if(ActiveClassS == "Te") { document.getElementById("CSTe").checked = true; }
		if(ActiveClassS == "Br") { document.getElementById("CSBr").checked = true; }
		if(ActiveClassS == "Bo") { document.getElementById("CSBo").checked = true; }
		if(ActiveClassS == "Su") { document.getElementById("CSSu").checked = true; }
		if(ActiveClassS == "Ph") { document.getElementById("CSPh").checked = true; }
		if(ActiveClassS == "Et") { document.getElementById("CSEt").checked = true; }
		Update();
	}
function Update()
	{
		document.getElementById("TabCrit").style.display = "inline";
		if(ActiveClassM == "Hu" || ActiveClassS == "Hu")
			{
				TabCritList = document.getElementsByClassName("TabCritClassHu");
				for(var Count = 0; Count < TabCritList.length; Count ++) { TabCritList[Count].style.visibility = "visible"; }
			}
		if(ActiveClassM != "Hu" && ActiveClassS != "Hu")
			{
				TabCritList = document.getElementsByClassName("TabCritClassHu");
				for(var Count = 0; Count < TabCritList.length; Count ++) { TabCritList[Count].style.visibility = "collapse"; }
				document.getElementById("TabCritClassHuFuryStanceCritical").selectedIndex = "0";
				UpdateSkill("TabCritClassHuFuryStanceCritical");
			}
		if(ActiveClassM == "Fi")
			{
				TabCritList = document.getElementsByClassName("TabCritClassFiMain");
				for(var Count = 0; Count < TabCritList.length; Count ++) { TabCritList[Count].style.visibility = "visible"; }
			}
		if(ActiveClassM != "Fi")
			{
				TabCritList = document.getElementsByClassName("TabCritClassFiMain");
				for(var Count = 0; Count < TabCritList.length; Count ++) { TabCritList[Count].style.visibility = "collapse"; }
				document.getElementById("TabCritClassFiCriticalStrike").selectedIndex = "0";
				UpdateSkill("TabCritClassFiCriticalStrike");
			}
		if(ActiveClassM == "Fi" || ActiveClassS == "Fi")
			{
				TabCritList = document.getElementsByClassName("TabCritClassFi");
				for(var Count = 0; Count < TabCritList.length; Count ++) { TabCritList[Count].style.visibility = "visible"; }
				if(document.getElementById("TabCritRingR").value == "Fi") 
					{
						document.getElementById("TabCritRingR").selectedIndex = "0";
						document.getElementById("TabCritRingRLv").selectedIndex = "0";
						document.getElementById("TabCritRingRValueRate").innerHTML = "0%";
						document.getElementById("TabCritRingRValueCDMG").innerHTML = "100%";
						document.getElementById("TabCritRingRValueUDMG").innerHTML = "100%";
						document.getElementById("TabCritRingRLv").style.display = "none";
					}
				document.getElementById("TabCritRingR").getElementsByTagName("option")[1].disabled = true;
			}
		if(ActiveClassM != "Fi" && ActiveClassS != "Fi")
			{
				TabCritList = document.getElementsByClassName("TabCritClassFi");
				for(var Count = 0; Count < TabCritList.length; Count ++) { TabCritList[Count].style.visibility = "collapse"; }
				document.getElementById("TabCritClassFiStanceCritical").selectedIndex = "0";
				UpdateSkill("TabCritClassFiStanceCritical");
				document.getElementById("TabCritRingR").getElementsByTagName("option")[1].disabled = false;
			}
		if(ActiveClassM == "Gu")
			{
				TabCritList = document.getElementsByClassName("TabCritClassGuMain");
				for(var Count = 0; Count < TabCritList.length; Count ++) { TabCritList[Count].style.visibility = "visible"; }
			}
		if(ActiveClassM != "Gu")
			{
				TabCritList = document.getElementsByClassName("TabCritClassGuMain");
				for(var Count = 0; Count < TabCritList.length; Count ++) { TabCritList[Count].style.visibility = "collapse"; }
				document.getElementById("TabCritClassGuTwinMachineGunMastery").selectedIndex = "0";
				UpdateSkill("TabCritClassGuTwinMachineGunMastery");
			}
		if(ActiveClassM == "Gu" || ActiveClassS == "Gu")
			{
				TabCritList = document.getElementsByClassName("TabCritClassGu");
				for(var Count = 0; Count < TabCritList.length; Count ++) { TabCritList[Count].style.visibility = "visible"; }
				if(document.getElementById("TabCritRingR").value == "Gu")
					{
						document.getElementById("TabCritRingR").selectedIndex = "0";
						document.getElementById("TabCritRingRLv").selectedIndex = "0";
						document.getElementById("TabCritRingRValueRate").innerHTML = "0%";
						document.getElementById("TabCritRingRValueCDMG").innerHTML = "100%";
						document.getElementById("TabCritRingRValueUDMG").innerHTML = "100%";
						document.getElementById("TabCritRingRLv").style.display = "none";
					}
				document.getElementById("TabCritRingR").getElementsByTagName("option")[2].disabled = true;
			}
		if(ActiveClassM != "Gu" && ActiveClassS != "Gu")
			{
				TabCritList = document.getElementsByClassName("TabCritClassGu");
				for(var Count = 0; Count < TabCritList.length; Count ++) { TabCritList[Count].style.visibility = "collapse"; }
				document.getElementById("TabCritClassGuZeroRangeCritical").selectedIndex = "0";
				UpdateSkill("TabCritClassGuZeroRangeCritical");
				document.getElementById("TabCritRingR").getElementsByTagName("option")[2].disabled = false;
			}
		if(ActiveClassM == "Br" || ActiveClassS == "Br")
			{
				TabCritList = document.getElementsByClassName("TabCritClassBr");
				for(var Count = 0; Count < TabCritList.length; Count ++) { TabCritList[Count].style.visibility = "visible"; }
			}
		if(ActiveClassM != "Br" && ActiveClassS != "Br")
			{
				TabCritList = document.getElementsByClassName("TabCritClassBr");
				for(var Count = 0; Count < TabCritList.length; Count ++) { TabCritList[Count].style.visibility = "collapse"; }
				document.getElementById("TabCritClassBrKatanaGear").checked = false;
				document.getElementById("TabCritClassBrStanceCritical").selectedIndex = "0";
				UpdateSkill("TabCritClassBrKatanaGear");
				UpdateSkill("TabCritClassBrStanceCritical");
			}
		if(ActiveClassM == "Bo" || ActiveClassS == "Bo")
			{
				TabCritList = document.getElementsByClassName("TabCritClassBo");
				for(var Count = 0; Count < TabCritList.length; Count ++) { TabCritList[Count].style.visibility = "visible"; }
			}
		if(ActiveClassM != "Bo" && ActiveClassS != "Bo")
			{
				TabCritList = document.getElementsByClassName("TabCritClassBo");
				for(var Count = 0; Count < TabCritList.length; Count ++) { TabCritList[Count].style.visibility = "collapse"; }
				document.getElementById("TabCritClassBoStanceCritical").selectedIndex = "0";
				UpdateSkill("TabCritClassBoStanceCritical");
			}
		if(ActiveClassM == "Hr" || ActiveClassS == "Hr")
			{
				TabCritList = document.getElementsByClassName("TabCritClassHr");
				for(var Count = 0; Count < TabCritList.length; Count ++) { TabCritList[Count].style.visibility = "visible"; }
			}
		if(ActiveClassM != "Hr" && ActiveClassS != "Hr")
			{
				TabCritList = document.getElementsByClassName("TabCritClassHr");
				for(var Count = 0; Count < TabCritList.length; Count ++) { TabCritList[Count].style.visibility = "collapse"; }
				document.getElementById("TabCritClassHrWeakAttackCritical").selectedIndex = "0";
				UpdateSkill("TabCritClassHrWeakAttackCritical");
			}
		if(ActiveClassM == "Ph" || ActiveClassS == "Ph")
			{
				TabCritList = document.getElementsByClassName("TabCritClassPh");
				for(var Count = 0; Count < TabCritList.length; Count ++) { TabCritList[Count].style.visibility = "visible"; }
			}
		if(ActiveClassM != "Ph" && ActiveClassS != "Ph")
			{
				TabCritList = document.getElementsByClassName("TabCritClassPh");
				for(var Count = 0; Count < TabCritList.length; Count ++) { TabCritList[Count].style.visibility = "collapse"; }
				document.getElementById("TabCritClassPhCriticalStream").selectedIndex = "0";
				UpdateSkill("TabCritClassPhCriticalStream");
			}
		if(ActiveClassM == "Et" || ActiveClassS == "Et")
			{
				TabCritList = document.getElementsByClassName("TabCritClassEt");
				for(var Count = 0; Count < TabCritList.length; Count ++) { TabCritList[Count].style.visibility = "visible"; }
			}
		if(ActiveClassM != "Et" && ActiveClassS != "Et")
			{
				TabCritList = document.getElementsByClassName("TabCritClassEt");
				for(var Count = 0; Count < TabCritList.length; Count ++) { TabCritList[Count].style.visibility = "collapse"; }
				document.getElementById("TabCritClassEtJustAttackCritical").selectedIndex = "0";
				UpdateSkill("TabCritClassEtJustAttackCritical");
			}
	}
function UpdateSkill(Skill)
	{
		if(Skill.includes("Stance"))
			{
				if(document.getElementById(Skill).value == 0) { document.getElementById(Skill + "ValueRate").innerHTML = "0%"; }
				if(document.getElementById(Skill).value == 1) { document.getElementById(Skill + "ValueRate").innerHTML = "10%"; }
				if(document.getElementById(Skill).value == 2) { document.getElementById(Skill + "ValueRate").innerHTML = "16%"; }
				if(document.getElementById(Skill).value == 3) { document.getElementById(Skill + "ValueRate").innerHTML = "20%"; }
				if(document.getElementById(Skill).value == 4) { document.getElementById(Skill + "ValueRate").innerHTML = "23%"; }
				if(document.getElementById(Skill).value == 5) { document.getElementById(Skill + "ValueRate").innerHTML = "25%"; }
				document.getElementById(Skill + "ValueCDMG").innerHTML = "100%";
				document.getElementById(Skill + "ValueUDMG").innerHTML = "100%";
			}
		if(Skill == "TabCritClassFiCriticalStrike")
			{
				if(document.getElementById(Skill).value == 0)
					{
						document.getElementById(Skill + "ValueRate").innerHTML = "0%";
						document.getElementById(Skill + "ValueCDMG").innerHTML = "100%";
					}
				if(document.getElementById(Skill).value == 1)
					{
						document.getElementById(Skill + "ValueRate").innerHTML = "3%";
						document.getElementById(Skill + "ValueCDMG").innerHTML = "103%";
					}
				if(document.getElementById(Skill).value == 2)
					{
						document.getElementById(Skill + "ValueRate").innerHTML = "6%";
						document.getElementById(Skill + "ValueCDMG").innerHTML = "106%";
					}
				if(document.getElementById(Skill).value == 3)
					{
						document.getElementById(Skill + "ValueRate").innerHTML = "9%";
						document.getElementById(Skill + "ValueCDMG").innerHTML = "109%";
					}
				if(document.getElementById(Skill).value == 4)
					{
						document.getElementById(Skill + "ValueRate").innerHTML = "12%";
						document.getElementById(Skill + "ValueCDMG").innerHTML = "112%";
					}
				if(document.getElementById(Skill).value == 5)
					{
						document.getElementById(Skill + "ValueRate").innerHTML = "15%";
						document.getElementById(Skill + "ValueCDMG").innerHTML = "115%";
					}
				document.getElementById(Skill + "ValueUDMG").innerHTML = "100%";
			}
		if(Skill == "TabCritClassGuTwinMachineGunMastery")
			{
				document.getElementById(Skill + "ValueRate").innerHTML = "0%";
				if(document.getElementById(Skill).value == 0) { document.getElementById(Skill + "ValueCDMG").innerHTML = "100%"; }
				if(document.getElementById(Skill).value == 1) { document.getElementById(Skill + "ValueCDMG").innerHTML = "101%"; }
				if(document.getElementById(Skill).value == 2) { document.getElementById(Skill + "ValueCDMG").innerHTML = "102%"; }
				if(document.getElementById(Skill).value == 3) { document.getElementById(Skill + "ValueCDMG").innerHTML = "103%"; }
				if(document.getElementById(Skill).value == 4) { document.getElementById(Skill + "ValueCDMG").innerHTML = "104%"; }
				if(document.getElementById(Skill).value == 5) { document.getElementById(Skill + "ValueCDMG").innerHTML = "105%"; }
				document.getElementById(Skill + "ValueUDMG").innerHTML = "100%";
			}
		if(Skill == "TabCritClassGuZeroRangeCritical")
			{
				if(document.getElementById(Skill).value == 0) { document.getElementById(Skill + "ValueRate").innerHTML = "0%"; }
				if(document.getElementById(Skill).value == 1) { document.getElementById(Skill + "ValueRate").innerHTML = "20%"; }
				if(document.getElementById(Skill).value == 2) { document.getElementById(Skill + "ValueRate").innerHTML = "25%"; }
				if(document.getElementById(Skill).value == 3) { document.getElementById(Skill + "ValueRate").innerHTML = "32%"; }
				if(document.getElementById(Skill).value == 4) { document.getElementById(Skill + "ValueRate").innerHTML = "40%"; }
				if(document.getElementById(Skill).value == 5) { document.getElementById(Skill + "ValueRate").innerHTML = "50%"; }
				document.getElementById(Skill + "ValueCDMG").innerHTML = "100%";
				document.getElementById(Skill + "ValueUDMG").innerHTML = "100%";
			}
		if(Skill == "TabCritClassBrKatanaGear")
			{
				if(document.getElementById("TabCritClassBrKatanaGear").checked) { document.getElementById(Skill + "ValueRate").innerHTML = "50%"; }
				else { document.getElementById(Skill + "ValueRate").innerHTML = "0%"; }
				document.getElementById(Skill + "ValueCDMG").innerHTML = "100%";
				document.getElementById(Skill + "ValueUDMG").innerHTML = "100%";
			}
		if(Skill == "TabCritClassHrWeakAttackCritical")
			{
				if(document.getElementById(Skill).value == 0) { document.getElementById(Skill + "ValueRate").innerHTML = "0%"; }
				if(document.getElementById(Skill).value == 1) { document.getElementById(Skill + "ValueRate").innerHTML = "20%"; }
				if(document.getElementById(Skill).value == 2) { document.getElementById(Skill + "ValueRate").innerHTML = "30%"; }
				if(document.getElementById(Skill).value == 3) { document.getElementById(Skill + "ValueRate").innerHTML = "40%"; }
				if(document.getElementById(Skill).value == 4) { document.getElementById(Skill + "ValueRate").innerHTML = "50%"; }
				if(document.getElementById(Skill).value == 5) { document.getElementById(Skill + "ValueRate").innerHTML = "60%"; }
				document.getElementById(Skill + "ValueCDMG").innerHTML = "100%";
				document.getElementById(Skill + "ValueUDMG").innerHTML = "100%";
			}
		if(Skill == "TabCritClassPhCriticalStream")
			{
				document.getElementById(Skill + "ValueRate").innerHTML = "0%";
				if(parseFloat(document.getElementById("TabCritClassPhPP").value) < parseFloat(document.getElementById("TabCritClassPhPP").min)) { document.getElementById("TabCritClassPhPP").value = document.getElementById("TabCritClassPhPP").min; }
				if(parseFloat(document.getElementById("TabCritClassPhPP").value) > parseFloat(document.getElementById("TabCritClassPhPP").max)) { document.getElementById("TabCritClassPhPP").value = document.getElementById("TabCritClassPhPP").max; }
				if(document.getElementById("TabCritClassPhPP").value.length > document.getElementById("TabCritClassPhPP").maxLength) { document.getElementById("TabCritClassPhPP").value = document.getElementById("TabCritClassPhPP").value.slice(0, document.getElementById("TabCritClassPhPP").maxLength); }
				if(document.getElementById(Skill).value == 0) { document.getElementById(Skill + "ValueRate").innerHTML = "0%"; }
				if(document.getElementById(Skill).value == 1) { document.getElementById(Skill + "ValueRate").innerHTML = (document.getElementById("TabCritClassPhPP").value * 0.1).toFixed(2) + "%"; }
				if(document.getElementById(Skill).value == 2) { document.getElementById(Skill + "ValueRate").innerHTML = (document.getElementById("TabCritClassPhPP").value * 0.12).toFixed(2) + "%"; }
				if(document.getElementById(Skill).value == 3) { document.getElementById(Skill + "ValueRate").innerHTML = (document.getElementById("TabCritClassPhPP").value * 0.14).toFixed(2) + "%"; }
				if(document.getElementById(Skill).value == 4) { document.getElementById(Skill + "ValueRate").innerHTML = (document.getElementById("TabCritClassPhPP").value * 0.16).toFixed(2) + "%"; }
				if(document.getElementById(Skill).value == 5) { document.getElementById(Skill + "ValueRate").innerHTML = (document.getElementById("TabCritClassPhPP").value * 0.2).toFixed(2) + "%"; }
				if(document.getElementById(Skill).value == 0) { document.getElementById(Skill + "ValueCDMG").innerHTML = "100%"; }
				if(document.getElementById(Skill).value == 1) { document.getElementById(Skill + "ValueCDMG").innerHTML = (document.getElementById("TabCritClassPhPP").value * 0.02 + 100).toFixed(2) + "%"; }
				if(document.getElementById(Skill).value == 2) { document.getElementById(Skill + "ValueCDMG").innerHTML = (document.getElementById("TabCritClassPhPP").value * 0.022 + 100).toFixed(2) + "%"; }
				if(document.getElementById(Skill).value == 3) { document.getElementById(Skill + "ValueCDMG").innerHTML = (document.getElementById("TabCritClassPhPP").value * 0.024 + 100).toFixed(2) + "%"; }
				if(document.getElementById(Skill).value == 4) { document.getElementById(Skill + "ValueCDMG").innerHTML = (document.getElementById("TabCritClassPhPP").value * 0.026 + 100).toFixed(2) + "%"; }
				if(document.getElementById(Skill).value == 5) { document.getElementById(Skill + "ValueCDMG").innerHTML = (document.getElementById("TabCritClassPhPP").value * 0.03 + 100).toFixed(2) + "%"; }
				if(document.getElementById(Skill).value != 0 && parseFloat(document.getElementById(Skill + "ValueCDMG").innerHTML) > 105) { document.getElementById(Skill + "ValueCDMG").innerHTML = "105%"; }
				document.getElementById(Skill + "ValueUDMG").innerHTML = "100%";
			}
		if(Skill == "TabCritClassEtJustAttackCritical")
			{
				if(document.getElementById(Skill).value == 0) { document.getElementById(Skill + "ValueRate").innerHTML = "0%"; }
				if(document.getElementById(Skill).value == 1) { document.getElementById(Skill + "ValueRate").innerHTML = "15%"; }
				if(document.getElementById(Skill).value == 2) { document.getElementById(Skill + "ValueRate").innerHTML = "20%"; }
				if(document.getElementById(Skill).value == 3) { document.getElementById(Skill + "ValueRate").innerHTML = "25%"; }
				if(document.getElementById(Skill).value == 4) { document.getElementById(Skill + "ValueRate").innerHTML = "30%"; }
				if(document.getElementById(Skill).value == 5) { document.getElementById(Skill + "ValueRate").innerHTML = "34%"; }
				if(document.getElementById(Skill).value == 6) { document.getElementById(Skill + "ValueRate").innerHTML = "38%"; }
				if(document.getElementById(Skill).value == 7) { document.getElementById(Skill + "ValueRate").innerHTML = "42%"; }
				if(document.getElementById(Skill).value == 8) { document.getElementById(Skill + "ValueRate").innerHTML = "46%"; }
				if(document.getElementById(Skill).value == 9) { document.getElementById(Skill + "ValueRate").innerHTML = "48%"; }
				if(document.getElementById(Skill).value == 10) { document.getElementById(Skill + "ValueRate").innerHTML = "50%"; }
				document.getElementById(Skill + "ValueCDMG").innerHTML = "100%";
				document.getElementById(Skill + "ValueUDMG").innerHTML = "100%";
			}
		UpdateCrit();
	}
function UpdateRing()
	{
		if(document.getElementById("TabCritRingR").value == "NA")
			{
				document.getElementById("TabCritRingRLv").selectedIndex = "0";
				document.getElementById("TabCritRingRValueRate").innerHTML = "0%";
				document.getElementById("TabCritRingRValueCDMG").innerHTML = "100%";
				document.getElementById("TabCritRingRValueUDMG").innerHTML = "100%";
				document.getElementById("TabCritRingRLv").style.display = "none";
			}
		else
			{
				document.getElementById("TabCritRingRLv").style.display = "inline";
				if(document.getElementById("TabCritRingR").value == "Fi")
					{
						document.getElementById("TabCritRingRValueRate").innerHTML = document.getElementById("TabCritRingRLv").value + "%";
						if(document.getElementById("TabCritRingRLv").value >= 1) { document.getElementById("TabCritRingRValueCDMG").innerHTML = "100%"; }
						if(document.getElementById("TabCritRingRLv").value >= 6) { document.getElementById("TabCritRingRValueCDMG").innerHTML = "101%"; }
						if(document.getElementById("TabCritRingRLv").value >= 11) { document.getElementById("TabCritRingRValueCDMG").innerHTML = "102%"; }
						if(document.getElementById("TabCritRingRLv").value == 20) { document.getElementById("TabCritRingRValueCDMG").innerHTML = "103%"; }
						document.getElementById("TabCritRingRValueUDMG").innerHTML = "100%";
					}
				if(document.getElementById("TabCritRingR").value == "Gu")
					{
						document.getElementById("TabCritRingRValueRate").innerHTML = "0%";
						document.getElementById("TabCritRingRValueCDMG").innerHTML = "100%";
						if(document.getElementById("TabCritRingRLv").value >= 1) { document.getElementById("TabCritRingRValueUDMG").innerHTML = "100%"; }
						if(document.getElementById("TabCritRingRLv").value >= 6) { document.getElementById("TabCritRingRValueUDMG").innerHTML = "101%"; }
						if(document.getElementById("TabCritRingRLv").value >= 11) { document.getElementById("TabCritRingRValueUDMG").innerHTML = "102%"; }
						if(document.getElementById("TabCritRingRLv").value == 20) { document.getElementById("TabCritRingRValueUDMG").innerHTML = "103%"; }
					}
				if(document.getElementById("TabCritRingR").value == "All")
					{
						document.getElementById("TabCritRingRValueRate").innerHTML = (document.getElementById("TabCritRingRLv").value / 2).toFixed(2) + "%";
						document.getElementById("TabCritRingRValueCDMG").innerHTML = "100%";
						document.getElementById("TabCritRingRValueUDMG").innerHTML = (document.getElementById("TabCritRingRLv").value / 20 + 100).toFixed(2) + "%";
						if(document.getElementById("TabCritRingRLv").value % 2 == 1) { document.getElementById("TabCritRingRValueUDMG").innerHTML = (parseFloat(document.getElementById("TabCritRingRValueUDMG").innerHTML) - 0.05).toFixed(2) + "%"; }
						if(document.getElementById("TabCritRingRLv").value == 1) { document.getElementById("TabCritRingRValueUDMG").innerHTML = "100.10%"; }
					}
			}
		UpdateCrit();
	}
function UpdateSKyuu(SKyuu)
	{
		TabCritList = document.getElementsByClassName(SKyuu + "ETC");
		for(var Count = 0; Count < TabCritList.length; Count ++) { TabCritList[Count].style.display = "none"; }
		if(document.getElementById(SKyuu).value == "NA")
			{
				document.getElementById(SKyuu + "ValueRate").innerHTML = "0%";
				document.getElementById(SKyuu + "ValueCDMG").innerHTML = "100%";
				document.getElementById(SKyuu + "ValueUDMG").innerHTML = "100%";
			}
		if(document.getElementById(SKyuu).value == "ETC")
			{
				document.getElementById(SKyuu + "ValueRate").innerHTML = "0%";
				document.getElementById(SKyuu + "ValueCDMG").innerHTML = "100%";
				document.getElementById(SKyuu + "ValueUDMG").innerHTML = "100%";
				TabCritList = document.getElementsByClassName(SKyuu + "ETC");
				for(var Count = 0; Count < TabCritList.length; Count ++) { TabCritList[Count].style.display = "inline"; }
			}
		if(document.getElementById(SKyuu).value != "ETC")
			{
				document.getElementById(SKyuu + "ETCValueRate").value = 0;
				document.getElementById(SKyuu + "ETCValueCDMG").value = 100;
				document.getElementById(SKyuu + "ETCValueUDMG").value = 100;
			}
		if(SKyuu.includes("1"))
			{
				if(document.getElementById(SKyuu).value == "Rate1")
					{
						document.getElementById(SKyuu + "ValueRate").innerHTML = "15%";
						document.getElementById(SKyuu + "ValueCDMG").innerHTML = "100%";
						document.getElementById(SKyuu + "ValueUDMG").innerHTML = "100%";
					}
				if(document.getElementById(SKyuu).value == "CDMG1")
					{
						document.getElementById(SKyuu + "ValueRate").innerHTML = "0%";
						document.getElementById(SKyuu + "ValueCDMG").innerHTML = "103%";
						document.getElementById(SKyuu + "ValueUDMG").innerHTML = "100%";
					}
			}
		if(SKyuu.includes("2"))
			{
				if(document.getElementById(SKyuu).value == "Rate1")
					{
						document.getElementById(SKyuu + "ValueRate").innerHTML = "12%";
						document.getElementById(SKyuu + "ValueCDMG").innerHTML = "100%";
						document.getElementById(SKyuu + "ValueUDMG").innerHTML = "100%";
					}
				if(document.getElementById(SKyuu).value == "Rate2")
					{
						document.getElementById(SKyuu + "ValueRate").innerHTML = "15%";
						document.getElementById(SKyuu + "ValueCDMG").innerHTML = "100%";
						document.getElementById(SKyuu + "ValueUDMG").innerHTML = "100%";
					}
				if(document.getElementById(SKyuu).value == "CDMG1")
					{
						document.getElementById(SKyuu + "ValueRate").innerHTML = "0%";
						document.getElementById(SKyuu + "ValueCDMG").innerHTML = "103%";
						document.getElementById(SKyuu + "ValueUDMG").innerHTML = "100%";
					}
				if(document.getElementById(SKyuu).value == "CDMG2")
					{
						document.getElementById(SKyuu + "ValueRate").innerHTML = "0%";
						document.getElementById(SKyuu + "ValueCDMG").innerHTML = "104%";
						document.getElementById(SKyuu + "ValueUDMG").innerHTML = "100%";
					}
				if(document.getElementById(SKyuu).value == "CRate1")
					{
						document.getElementById("TabCritSKyuu1").getElementsByTagName("option")[0].disabled = true;
						document.getElementById("TabCritSKyuu1").getElementsByTagName("option")[1].disabled = true;
						document.getElementById("TabCritSKyuu1").getElementsByTagName("option")[2].disabled = true;
						document.getElementById("TabCritSKyuu1").selectedIndex = "3";
						UpdateSKyuu("TabCritSKyuu1");
						document.getElementById(SKyuu + "ValueRate").innerHTML = "20%";
						document.getElementById(SKyuu + "ValueCDMG").innerHTML = "100%";
						document.getElementById(SKyuu + "ValueUDMG").innerHTML = "100%";
					}
			}
		if(SKyuu.includes("3"))
			{
				if(document.getElementById(SKyuu).value == "Rate1")
					{
						document.getElementById(SKyuu + "ValueRate").innerHTML = "12%";
						document.getElementById(SKyuu + "ValueCDMG").innerHTML = "100%";
						document.getElementById(SKyuu + "ValueUDMG").innerHTML = "100%";
					}
				if(document.getElementById(SKyuu).value == "Rate2")
					{
						document.getElementById(SKyuu + "ValueRate").innerHTML = "30%";
						document.getElementById(SKyuu + "ValueCDMG").innerHTML = "100%";
						document.getElementById(SKyuu + "ValueUDMG").innerHTML = "100%";
					}
				if(document.getElementById(SKyuu).value == "CDMG1")
					{
						document.getElementById(SKyuu + "ValueRate").innerHTML = "0%";
						document.getElementById(SKyuu + "ValueCDMG").innerHTML = "104%";
						document.getElementById(SKyuu + "ValueUDMG").innerHTML = "100%";
					}
				if(document.getElementById(SKyuu).value == "CDMG2")
					{
						document.getElementById(SKyuu + "ValueRate").innerHTML = "0%";
						document.getElementById(SKyuu + "ValueCDMG").innerHTML = "105%";
						document.getElementById(SKyuu + "ValueUDMG").innerHTML = "100%";
					}
				if(document.getElementById(SKyuu).value == "CRate1")
					{
						document.getElementById("TabCritSKyuu1").getElementsByTagName("option")[0].disabled = true;
						document.getElementById("TabCritSKyuu1").getElementsByTagName("option")[1].disabled = true;
						document.getElementById("TabCritSKyuu1").getElementsByTagName("option")[2].disabled = true;
						document.getElementById("TabCritSKyuu1").selectedIndex = "3";
						UpdateSKyuu("TabCritSKyuu1");
						document.getElementById(SKyuu + "ValueRate").innerHTML = "20%";
						document.getElementById(SKyuu + "ValueCDMG").innerHTML = "100%";
						document.getElementById(SKyuu + "ValueUDMG").innerHTML = "100%";
					}
			}
		if(SKyuu.includes("4"))
			{
				if(document.getElementById(SKyuu).value == "Rate1")
					{
						document.getElementById(SKyuu + "ValueRate").innerHTML = "30%";
						document.getElementById(SKyuu + "ValueCDMG").innerHTML = "100%";
						document.getElementById(SKyuu + "ValueUDMG").innerHTML = "100%";
					}
				if(document.getElementById(SKyuu).value == "Rate2")
					{
						document.getElementById(SKyuu + "ValueRate").innerHTML = "50%";
						document.getElementById(SKyuu + "ValueCDMG").innerHTML = "100%";
						document.getElementById(SKyuu + "ValueUDMG").innerHTML = "100%";
					}
				if(document.getElementById(SKyuu).value == "Both1")
					{
						document.getElementById(SKyuu + "ValueRate").innerHTML = "-50%";
						document.getElementById(SKyuu + "ValueCDMG").innerHTML = "106%";
						document.getElementById(SKyuu + "ValueUDMG").innerHTML = "100%";
					}
			}
		if(SKyuu.includes("5"))
			{
				if(document.getElementById(SKyuu).value == "Both1")
					{
						document.getElementById(SKyuu + "ValueRate").innerHTML = "20%";
						document.getElementById(SKyuu + "ValueCDMG").innerHTML = "102%";
						document.getElementById(SKyuu + "ValueUDMG").innerHTML = "100%";
					}
			}
		if(SKyuu.includes("6"))
			{
				if(document.getElementById(SKyuu).value == "Rate1")
					{
						document.getElementById(SKyuu + "ValueRate").innerHTML = "15%";
						document.getElementById(SKyuu + "ValueCDMG").innerHTML = "100%";
						document.getElementById(SKyuu + "ValueUDMG").innerHTML = "100%";
					}
			}
		if(document.getElementById("TabCritSKyuu2").value != "CRate1" && document.getElementById("TabCritSKyuu3").value != "CRate1")
			{
				document.getElementById("TabCritSKyuu1").getElementsByTagName("option")[0].disabled = false;
				document.getElementById("TabCritSKyuu1").getElementsByTagName("option")[1].disabled = false;
				document.getElementById("TabCritSKyuu1").getElementsByTagName("option")[2].disabled = false;
			}
		UpdateCrit();
	}
function UpdateSKyuuETC(SKyuu)
	{
		if(parseFloat(document.getElementById(SKyuu).value) < parseFloat(document.getElementById(SKyuu).min)) { document.getElementById(SKyuu).value = document.getElementById(SKyuu).min; }
		if(parseFloat(document.getElementById(SKyuu).value) > parseFloat(document.getElementById(SKyuu).max)) { document.getElementById(SKyuu).value = document.getElementById(SKyuu).max; }
		if(document.getElementById(SKyuu).value.length > document.getElementById(SKyuu).maxLength) { document.getElementById(SKyuu).value = document.getElementById(SKyuu).value.slice(0, document.getElementById(SKyuu).maxLength); }
		UpdateCrit();
	}
function UpdateSenzai(Senzai)
	{
		if(parseFloat(document.getElementById(Senzai).value) < parseFloat(document.getElementById(Senzai).min)) { document.getElementById(Senzai).value = document.getElementById(Senzai).min; }
		if(parseFloat(document.getElementById(Senzai).value) > parseFloat(document.getElementById(Senzai).max)) { document.getElementById(Senzai).value = document.getElementById(Senzai).max; }
		if(document.getElementById(Senzai).value.length > document.getElementById(Senzai).maxLength) { document.getElementById(Senzai).value = document.getElementById(Senzai).value.slice(0, document.getElementById(Senzai).maxLength); }
		UpdateCrit();
	}
function UpdateETC(ETC)
	{
		if(ETC == "TabCritETCTechter")
			{
				if(document.getElementById(ETC).value == 0) 
					{
						document.getElementById(ETC + "ValueRate").innerHTML = "0%";
						document.getElementById(ETC + "ValueUDMG").innerHTML = "100%";
					}
				if(document.getElementById(ETC).value == 1) 
					{
						document.getElementById(ETC + "ValueRate").innerHTML = "5%";
						document.getElementById(ETC + "ValueUDMG").innerHTML = "102%";
					}
				if(document.getElementById(ETC).value == 2) 
					{
						document.getElementById(ETC + "ValueRate").innerHTML = "10%";
						document.getElementById(ETC + "ValueUDMG").innerHTML = "104%";
					}
				if(document.getElementById(ETC).value == 3) 
					{
						document.getElementById(ETC + "ValueRate").innerHTML = "14%";
						document.getElementById(ETC + "ValueUDMG").innerHTML = "106%";
					}
				if(document.getElementById(ETC).value == 4) 
					{
						document.getElementById(ETC + "ValueRate").innerHTML = "17%";
						document.getElementById(ETC + "ValueUDMG").innerHTML = "108%";
					}
				if(document.getElementById(ETC).value == 5) 
					{
						document.getElementById(ETC + "ValueRate").innerHTML = "20%";
						document.getElementById(ETC + "ValueUDMG").innerHTML = "110%";
					}
				document.getElementById(ETC + "ValueCDMG").innerHTML = "100%";
			}
		if(ETC == "TabCritETCBouncer")
			{
				if(document.getElementById(ETC).value == 0) { document.getElementById(ETC + "ValueRate").innerHTML = "0%"; }
				if(document.getElementById(ETC).value == 1) { document.getElementById(ETC + "ValueRate").innerHTML = "5%"; }
				if(document.getElementById(ETC).value == 2) { document.getElementById(ETC + "ValueRate").innerHTML = "10%"; }
				if(document.getElementById(ETC).value == 3) { document.getElementById(ETC + "ValueRate").innerHTML = "15%"; }
				if(document.getElementById(ETC).value == 4) { document.getElementById(ETC + "ValueRate").innerHTML = "20%"; }
				if(document.getElementById(ETC).value == 5) { document.getElementById(ETC + "ValueRate").innerHTML = "30%"; }
				document.getElementById(ETC + "ValueCDMG").innerHTML = "100%";
				document.getElementById(ETC + "ValueUDMG").innerHTML = "100%";
			}
		UpdateCrit();
	}
function UpdateCrit()
	{
		CritRate = parseInt(document.getElementById("TabCritETCNaturalValueRate").innerHTML);
		CritRate += parseInt(document.getElementById("TabCritClassHuFuryStanceCriticalValueRate").innerHTML);
		CritRate += parseInt(document.getElementById("TabCritClassFiCriticalStrikeValueRate").innerHTML);
		CritRate += parseInt(document.getElementById("TabCritClassFiStanceCriticalValueRate").innerHTML);
		CritRate += parseInt(document.getElementById("TabCritClassGuTwinMachineGunMasteryValueRate").innerHTML);
		CritRate += parseInt(document.getElementById("TabCritClassGuZeroRangeCriticalValueRate").innerHTML);
		CritRate += parseInt(document.getElementById("TabCritClassBrKatanaGearValueRate").innerHTML);
		CritRate += parseInt(document.getElementById("TabCritClassBrStanceCriticalValueRate").innerHTML);
		CritRate += parseInt(document.getElementById("TabCritClassBoStanceCriticalValueRate").innerHTML);
		CritRate += parseInt(document.getElementById("TabCritClassHrWeakAttackCriticalValueRate").innerHTML);
		CritRate += parseInt(document.getElementById("TabCritClassPhCriticalStreamValueRate").innerHTML);
		CritRate += parseInt(document.getElementById("TabCritClassEtJustAttackCriticalValueRate").innerHTML);
		CritRate += parseFloat(document.getElementById("TabCritRingRValueRate").innerHTML);
		CritRate += parseInt(document.getElementById("TabCritSKyuu1ValueRate").innerHTML);
		CritRate += parseInt(document.getElementById("TabCritSKyuu2ValueRate").innerHTML);
		CritRate += parseInt(document.getElementById("TabCritSKyuu3ValueRate").innerHTML);
		CritRate += parseInt(document.getElementById("TabCritSKyuu4ValueRate").innerHTML);
		CritRate += parseInt(document.getElementById("TabCritSKyuu5ValueRate").innerHTML);
		CritRate += parseInt(document.getElementById("TabCritSKyuu6ValueRate").innerHTML);
		CritRate += parseInt(document.getElementById("TabCritSKyuu1ETCValueRate").value);
		CritRate += parseInt(document.getElementById("TabCritSKyuu2ETCValueRate").value);
		CritRate += parseInt(document.getElementById("TabCritSKyuu3ETCValueRate").value);
		CritRate += parseInt(document.getElementById("TabCritSKyuu4ETCValueRate").value);
		CritRate += parseInt(document.getElementById("TabCritSKyuu5ETCValueRate").value);
		CritRate += parseInt(document.getElementById("TabCritSKyuu6ETCValueRate").value);
		CritRate += parseFloat(document.getElementById("TabCritSenzaiValueRate").value);
		CritRate += parseInt(document.getElementById("TabCritETCTechterValueRate").innerHTML);
		CritRate += parseInt(document.getElementById("TabCritETCBouncerValueRate").innerHTML);
		if(CritRate < 0) { CritRate = 0; }
		if(CritRate > 100) { CritRate = 100; }
		document.getElementById("TabCritRate").innerHTML = CritRate.toFixed(2) + "%";
		CritCDMG = parseInt(document.getElementById("TabCritETCNaturalValueCDMG").innerHTML);
		CritCDMG *= parseInt(document.getElementById("TabCritClassHuFuryStanceCriticalValueCDMG").innerHTML) / 100;
		CritCDMG *= parseInt(document.getElementById("TabCritClassFiCriticalStrikeValueCDMG").innerHTML) / 100;
		CritCDMG *= parseInt(document.getElementById("TabCritClassFiStanceCriticalValueCDMG").innerHTML) / 100;
		CritCDMG *= parseInt(document.getElementById("TabCritClassGuTwinMachineGunMasteryValueCDMG").innerHTML) / 100;
		CritCDMG *= parseInt(document.getElementById("TabCritClassGuZeroRangeCriticalValueCDMG").innerHTML) / 100;
		CritCDMG *= parseInt(document.getElementById("TabCritClassBrKatanaGearValueCDMG").innerHTML) / 100;
		CritCDMG *= parseInt(document.getElementById("TabCritClassBrStanceCriticalValueCDMG").innerHTML) / 100;
		CritCDMG *= parseInt(document.getElementById("TabCritClassBoStanceCriticalValueCDMG").innerHTML) / 100;
		CritCDMG *= parseInt(document.getElementById("TabCritClassHrWeakAttackCriticalValueCDMG").innerHTML) / 100;
		CritCDMG *= parseInt(document.getElementById("TabCritClassPhCriticalStreamValueCDMG").innerHTML) / 100;
		CritCDMG *= parseInt(document.getElementById("TabCritClassEtJustAttackCriticalValueCDMG").innerHTML) / 100;
		CritCDMG *= parseInt(document.getElementById("TabCritRingRValueCDMG").innerHTML) / 100;
		CritCDMG *= parseInt(document.getElementById("TabCritSKyuu1ValueCDMG").innerHTML) / 100;
		CritCDMG *= parseInt(document.getElementById("TabCritSKyuu2ValueCDMG").innerHTML) / 100;
		CritCDMG *= parseInt(document.getElementById("TabCritSKyuu3ValueCDMG").innerHTML) / 100;
		CritCDMG *= parseInt(document.getElementById("TabCritSKyuu4ValueCDMG").innerHTML) / 100;
		CritCDMG *= parseInt(document.getElementById("TabCritSKyuu5ValueCDMG").innerHTML) / 100;
		CritCDMG *= parseInt(document.getElementById("TabCritSKyuu6ValueCDMG").innerHTML) / 100;
		CritCDMG *= parseFloat(document.getElementById("TabCritSKyuu1ETCValueCDMG").value) / 100;
		CritCDMG *= parseFloat(document.getElementById("TabCritSKyuu2ETCValueCDMG").value) / 100;
		CritCDMG *= parseFloat(document.getElementById("TabCritSKyuu3ETCValueCDMG").value) / 100;
		CritCDMG *= parseFloat(document.getElementById("TabCritSKyuu4ETCValueCDMG").value) / 100;
		CritCDMG *= parseFloat(document.getElementById("TabCritSKyuu5ETCValueCDMG").value) / 100;
		CritCDMG *= parseFloat(document.getElementById("TabCritSKyuu6ETCValueCDMG").value) / 100;
		CritCDMG *= parseFloat(document.getElementById("TabCritSenzaiValueCDMG").value) / 100;
		CritCDMG *= parseInt(document.getElementById("TabCritETCTechterValueCDMG").innerHTML) / 100;
		CritCDMG *= parseInt(document.getElementById("TabCritETCBouncerValueCDMG").innerHTML) / 100;
		document.getElementById("TabCritCDMG").innerHTML = CritCDMG.toFixed(2) + "%";
		CritUDMG = parseInt(document.getElementById("TabCritETCNaturalValueUDMG").innerHTML);
		CritUDMG *= parseInt(document.getElementById("TabCritClassHuFuryStanceCriticalValueUDMG").innerHTML) / 100;
		CritUDMG *= parseInt(document.getElementById("TabCritClassFiCriticalStrikeValueUDMG").innerHTML) / 100;
		CritUDMG *= parseInt(document.getElementById("TabCritClassFiStanceCriticalValueUDMG").innerHTML) / 100;
		CritUDMG *= parseInt(document.getElementById("TabCritClassGuTwinMachineGunMasteryValueUDMG").innerHTML) / 100;
		CritUDMG *= parseInt(document.getElementById("TabCritClassGuZeroRangeCriticalValueUDMG").innerHTML) / 100;
		CritUDMG *= parseInt(document.getElementById("TabCritClassBrKatanaGearValueUDMG").innerHTML) / 100;
		CritUDMG *= parseInt(document.getElementById("TabCritClassBrStanceCriticalValueUDMG").innerHTML) / 100;
		CritUDMG *= parseInt(document.getElementById("TabCritClassBoStanceCriticalValueUDMG").innerHTML) / 100;
		CritUDMG *= parseInt(document.getElementById("TabCritClassHrWeakAttackCriticalValueUDMG").innerHTML) / 100;
		CritUDMG *= parseInt(document.getElementById("TabCritClassPhCriticalStreamValueUDMG").innerHTML) / 100;
		CritUDMG *= parseInt(document.getElementById("TabCritClassEtJustAttackCriticalValueUDMG").innerHTML) / 100;
		CritUDMG *= parseFloat(document.getElementById("TabCritRingRValueUDMG").innerHTML) / 100;
		CritUDMG *= parseInt(document.getElementById("TabCritSKyuu1ValueUDMG").innerHTML) / 100;
		CritUDMG *= parseInt(document.getElementById("TabCritSKyuu2ValueUDMG").innerHTML) / 100;
		CritUDMG *= parseInt(document.getElementById("TabCritSKyuu3ValueUDMG").innerHTML) / 100;
		CritUDMG *= parseInt(document.getElementById("TabCritSKyuu4ValueUDMG").innerHTML) / 100;
		CritUDMG *= parseInt(document.getElementById("TabCritSKyuu5ValueUDMG").innerHTML) / 100;
		CritUDMG *= parseInt(document.getElementById("TabCritSKyuu6ValueUDMG").innerHTML) / 100;
		CritUDMG *= parseFloat(document.getElementById("TabCritSKyuu1ETCValueUDMG").value) / 100;
		CritUDMG *= parseFloat(document.getElementById("TabCritSKyuu2ETCValueUDMG").value) / 100;
		CritUDMG *= parseFloat(document.getElementById("TabCritSKyuu3ETCValueUDMG").value) / 100;
		CritUDMG *= parseFloat(document.getElementById("TabCritSKyuu4ETCValueUDMG").value) / 100;
		CritUDMG *= parseFloat(document.getElementById("TabCritSKyuu5ETCValueUDMG").value) / 100;
		CritUDMG *= parseFloat(document.getElementById("TabCritSKyuu6ETCValueUDMG").value) / 100;
		CritUDMG *= parseFloat(document.getElementById("TabCritSenzaiValueUDMG").value) / 100;
		CritUDMG *= parseInt(document.getElementById("TabCritETCTechterValueUDMG").innerHTML) / 100;
		CritUDMG *= parseInt(document.getElementById("TabCritETCBouncerValueUDMG").innerHTML) / 100;
		document.getElementById("TabCritUDMG").innerHTML = CritUDMG.toFixed(2) + "%";
		CritTDMG = ((CritCDMG * 100) * (CritUDMG * 100)) / 1000000;
		document.getElementById("TabCritTDMG").innerHTML = CritTDMG.toFixed(2) + "%";
		document.getElementById("TabCritETCNaturalValueEDMG").innerHTML = (((parseInt(document.getElementById("TabCritETCNaturalValueCDMG").innerHTML) - 100) * CritRate / 100 + 100) * parseInt(document.getElementById("TabCritETCNaturalValueUDMG").innerHTML) / 100).toFixed(2) + "%";
		document.getElementById("TabCritClassHuFuryStanceCriticalValueEDMG").innerHTML = (((parseInt(document.getElementById("TabCritClassHuFuryStanceCriticalValueCDMG").innerHTML) - 100) * CritRate / 100 + 100) * parseInt(document.getElementById("TabCritClassHuFuryStanceCriticalValueUDMG").innerHTML) / 100).toFixed(2) + "%";
		document.getElementById("TabCritClassFiCriticalStrikeValueEDMG").innerHTML = (((parseInt(document.getElementById("TabCritClassFiCriticalStrikeValueCDMG").innerHTML) - 100) * CritRate / 100 + 100) * parseInt(document.getElementById("TabCritClassFiCriticalStrikeValueUDMG").innerHTML) / 100).toFixed(2) + "%";
		document.getElementById("TabCritClassFiStanceCriticalValueEDMG").innerHTML = (((parseInt(document.getElementById("TabCritClassFiStanceCriticalValueCDMG").innerHTML) - 100) * CritRate / 100 + 100) * parseInt(document.getElementById("TabCritClassFiStanceCriticalValueUDMG").innerHTML) / 100).toFixed(2) + "%";
		document.getElementById("TabCritClassGuTwinMachineGunMasteryValueEDMG").innerHTML = (((parseInt(document.getElementById("TabCritClassGuTwinMachineGunMasteryValueCDMG").innerHTML) - 100) * CritRate / 100 + 100) * parseInt(document.getElementById("TabCritClassGuTwinMachineGunMasteryValueUDMG").innerHTML) / 100).toFixed(2) + "%";
		document.getElementById("TabCritClassGuZeroRangeCriticalValueEDMG").innerHTML = (((parseInt(document.getElementById("TabCritClassGuZeroRangeCriticalValueCDMG").innerHTML) - 100) * CritRate / 100 + 100) * parseInt(document.getElementById("TabCritClassGuZeroRangeCriticalValueUDMG").innerHTML) / 100).toFixed(2) + "%";
		document.getElementById("TabCritClassBrKatanaGearValueEDMG").innerHTML = (((parseInt(document.getElementById("TabCritClassBrKatanaGearValueCDMG").innerHTML) - 100) * CritRate / 100 + 100) * parseInt(document.getElementById("TabCritClassBrKatanaGearValueUDMG").innerHTML) / 100).toFixed(2) + "%";
		document.getElementById("TabCritClassBrStanceCriticalValueEDMG").innerHTML = (((parseInt(document.getElementById("TabCritClassBrStanceCriticalValueCDMG").innerHTML) - 100) * CritRate / 100 + 100) * parseInt(document.getElementById("TabCritClassBrStanceCriticalValueUDMG").innerHTML) / 100).toFixed(2) + "%";
		document.getElementById("TabCritClassBoStanceCriticalValueEDMG").innerHTML = (((parseInt(document.getElementById("TabCritClassBoStanceCriticalValueCDMG").innerHTML) - 100) * CritRate / 100 + 100) * parseInt(document.getElementById("TabCritClassBoStanceCriticalValueUDMG").innerHTML) / 100).toFixed(2) + "%";
		document.getElementById("TabCritClassHrWeakAttackCriticalValueEDMG").innerHTML = (((parseInt(document.getElementById("TabCritClassHrWeakAttackCriticalValueCDMG").innerHTML) - 100) * CritRate / 100 + 100) * parseInt(document.getElementById("TabCritClassHrWeakAttackCriticalValueUDMG").innerHTML) / 100).toFixed(2) + "%";
		document.getElementById("TabCritClassPhCriticalStreamValueEDMG").innerHTML = (((parseInt(document.getElementById("TabCritClassPhCriticalStreamValueCDMG").innerHTML) - 100) * CritRate / 100 + 100) * parseInt(document.getElementById("TabCritClassPhCriticalStreamValueUDMG").innerHTML) / 100).toFixed(2) + "%";
		document.getElementById("TabCritClassEtJustAttackCriticalValueEDMG").innerHTML = (((parseInt(document.getElementById("TabCritClassEtJustAttackCriticalValueCDMG").innerHTML) - 100) * CritRate / 100 + 100) * parseInt(document.getElementById("TabCritClassEtJustAttackCriticalValueUDMG").innerHTML) / 100).toFixed(2) + "%";
		document.getElementById("TabCritRingRValueEDMG").innerHTML = (((parseInt(document.getElementById("TabCritRingRValueCDMG").innerHTML) - 100) * CritRate / 100 + 100) * parseInt(document.getElementById("TabCritRingRValueUDMG").innerHTML) / 100).toFixed(2) + "%";
		document.getElementById("TabCritSKyuu1ValueEDMG").innerHTML = (((parseInt(document.getElementById("TabCritSKyuu1ValueCDMG").innerHTML) - 100) * CritRate / 100 + 100) * parseInt(document.getElementById("TabCritSKyuu1ValueUDMG").innerHTML) / 100).toFixed(2) + "%";
		document.getElementById("TabCritSKyuu2ValueEDMG").innerHTML = (((parseInt(document.getElementById("TabCritSKyuu2ValueCDMG").innerHTML) - 100) * CritRate / 100 + 100) * parseInt(document.getElementById("TabCritSKyuu2ValueUDMG").innerHTML) / 100).toFixed(2) + "%";
		document.getElementById("TabCritSKyuu3ValueEDMG").innerHTML = (((parseInt(document.getElementById("TabCritSKyuu3ValueCDMG").innerHTML) - 100) * CritRate / 100 + 100) * parseInt(document.getElementById("TabCritSKyuu3ValueUDMG").innerHTML) / 100).toFixed(2) + "%";
		document.getElementById("TabCritSKyuu4ValueEDMG").innerHTML = (((parseInt(document.getElementById("TabCritSKyuu4ValueCDMG").innerHTML) - 100) * CritRate / 100 + 100) * parseInt(document.getElementById("TabCritSKyuu4ValueUDMG").innerHTML) / 100).toFixed(2) + "%";
		document.getElementById("TabCritSKyuu5ValueEDMG").innerHTML = (((parseInt(document.getElementById("TabCritSKyuu5ValueCDMG").innerHTML) - 100) * CritRate / 100 + 100) * parseInt(document.getElementById("TabCritSKyuu5ValueUDMG").innerHTML) / 100).toFixed(2) + "%";
		document.getElementById("TabCritSKyuu6ValueEDMG").innerHTML = (((parseInt(document.getElementById("TabCritSKyuu6ValueCDMG").innerHTML) - 100) * CritRate / 100 + 100) * parseInt(document.getElementById("TabCritSKyuu6ValueUDMG").innerHTML) / 100).toFixed(2) + "%";
		if(document.getElementById("TabCritSKyuu1").value == "ETC") { document.getElementById("TabCritSKyuu1ValueEDMG").innerHTML = (((parseFloat(document.getElementById("TabCritSKyuu1ETCValueCDMG").value) - 100) * CritRate / 100 + 100) * parseFloat(document.getElementById("TabCritSKyuu1ETCValueUDMG").value) / 100).toFixed(2) + "%"; }
		if(document.getElementById("TabCritSKyuu2").value == "ETC") { document.getElementById("TabCritSKyuu2ValueEDMG").innerHTML = (((parseFloat(document.getElementById("TabCritSKyuu2ETCValueCDMG").value) - 100) * CritRate / 100 + 100) * parseFloat(document.getElementById("TabCritSKyuu2ETCValueUDMG").value) / 100).toFixed(2) + "%"; }
		if(document.getElementById("TabCritSKyuu3").value == "ETC") { document.getElementById("TabCritSKyuu3ValueEDMG").innerHTML = (((parseFloat(document.getElementById("TabCritSKyuu3ETCValueCDMG").value) - 100) * CritRate / 100 + 100) * parseFloat(document.getElementById("TabCritSKyuu3ETCValueUDMG").value) / 100).toFixed(2) + "%"; }
		if(document.getElementById("TabCritSKyuu4").value == "ETC") { document.getElementById("TabCritSKyuu4ValueEDMG").innerHTML = (((parseFloat(document.getElementById("TabCritSKyuu4ETCValueCDMG").value) - 100) * CritRate / 100 + 100) * parseFloat(document.getElementById("TabCritSKyuu4ETCValueUDMG").value) / 100).toFixed(2) + "%"; }
		if(document.getElementById("TabCritSKyuu5").value == "ETC") { document.getElementById("TabCritSKyuu5ValueEDMG").innerHTML = (((parseFloat(document.getElementById("TabCritSKyuu5ETCValueCDMG").value) - 100) * CritRate / 100 + 100) * parseFloat(document.getElementById("TabCritSKyuu5ETCValueUDMG").value) / 100).toFixed(2) + "%"; }
		if(document.getElementById("TabCritSKyuu6").value == "ETC") { document.getElementById("TabCritSKyuu6ValueEDMG").innerHTML = (((parseFloat(document.getElementById("TabCritSKyuu6ETCValueCDMG").value) - 100) * CritRate / 100 + 100) * parseFloat(document.getElementById("TabCritSKyuu6ETCValueUDMG").value) / 100).toFixed(2) + "%"; }
		document.getElementById("TabCritSenzaiValueEDMG").innerHTML = (((parseFloat(document.getElementById("TabCritSenzaiValueCDMG").value) - 100) * CritRate / 100 + 100) * parseFloat(document.getElementById("TabCritSenzaiValueUDMG").value) / 100).toFixed(2) + "%";
		document.getElementById("TabCritETCTechterValueEDMG").innerHTML = (((parseInt(document.getElementById("TabCritETCTechterValueCDMG").innerHTML) - 100) * CritRate / 100 + 100) * parseInt(document.getElementById("TabCritETCTechterValueUDMG").innerHTML) / 100).toFixed(2) + "%";
		document.getElementById("TabCritETCBouncerValueEDMG").innerHTML = (((parseInt(document.getElementById("TabCritETCBouncerValueCDMG").innerHTML) - 100) * CritRate / 100 + 100) * parseInt(document.getElementById("TabCritETCBouncerValueUDMG").innerHTML) / 100).toFixed(2) + "%";
		CritEDMG = parseFloat(document.getElementById("TabCritETCNaturalValueEDMG").innerHTML);
		CritEDMG *= parseFloat(document.getElementById("TabCritClassHuFuryStanceCriticalValueEDMG").innerHTML) / 100;
		CritEDMG *= parseFloat(document.getElementById("TabCritClassFiCriticalStrikeValueEDMG").innerHTML) / 100;
		CritEDMG *= parseFloat(document.getElementById("TabCritClassFiStanceCriticalValueEDMG").innerHTML) / 100;
		CritEDMG *= parseFloat(document.getElementById("TabCritClassGuTwinMachineGunMasteryValueEDMG").innerHTML) / 100;
		CritEDMG *= parseFloat(document.getElementById("TabCritClassGuZeroRangeCriticalValueEDMG").innerHTML) / 100;
		CritEDMG *= parseFloat(document.getElementById("TabCritClassBrKatanaGearValueEDMG").innerHTML) / 100;
		CritEDMG *= parseFloat(document.getElementById("TabCritClassBrStanceCriticalValueEDMG").innerHTML) / 100;
		CritEDMG *= parseFloat(document.getElementById("TabCritClassBoStanceCriticalValueEDMG").innerHTML) / 100;
		CritEDMG *= parseFloat(document.getElementById("TabCritClassHrWeakAttackCriticalValueEDMG").innerHTML) / 100;
		CritEDMG *= parseFloat(document.getElementById("TabCritClassPhCriticalStreamValueEDMG").innerHTML) / 100;
		CritEDMG *= parseFloat(document.getElementById("TabCritClassEtJustAttackCriticalValueEDMG").innerHTML) / 100;
		CritEDMG *= parseFloat(document.getElementById("TabCritRingRValueEDMG").innerHTML) / 100;
		CritEDMG *= parseFloat(document.getElementById("TabCritSKyuu1ValueEDMG").innerHTML) / 100;
		CritEDMG *= parseFloat(document.getElementById("TabCritSKyuu2ValueEDMG").innerHTML) / 100;
		CritEDMG *= parseFloat(document.getElementById("TabCritSKyuu3ValueEDMG").innerHTML) / 100;
		CritEDMG *= parseFloat(document.getElementById("TabCritSKyuu4ValueEDMG").innerHTML) / 100;
		CritEDMG *= parseFloat(document.getElementById("TabCritSKyuu5ValueEDMG").innerHTML) / 100;
		CritEDMG *= parseFloat(document.getElementById("TabCritSKyuu6ValueEDMG").innerHTML) / 100;
		CritEDMG *= parseFloat(document.getElementById("TabCritSenzaiValueEDMG").innerHTML) / 100;
		CritEDMG *= parseFloat(document.getElementById("TabCritETCTechterValueEDMG").innerHTML) / 100;
		CritEDMG *= parseFloat(document.getElementById("TabCritETCBouncerValueEDMG").innerHTML) / 100;
		document.getElementById("TabCritEDMG").innerHTML = CritEDMG.toFixed(2) + "%";
		if(CritRate == 100) { document.getElementById("TabCritEDMG").innerHTML = document.getElementById("TabCritTDMG").innerHTML}
		
		if(parseInt(document.getElementById("TabCritETCNaturalValueRate").innerHTML) == 0) { document.getElementById("TabCritETCNaturalValueRate").style.display = "none"; }
		else { document.getElementById("TabCritETCNaturalValueRate").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritClassHuFuryStanceCriticalValueRate").innerHTML) == 0) { document.getElementById("TabCritClassHuFuryStanceCriticalValueRate").style.display = "none"; }
		else { document.getElementById("TabCritClassHuFuryStanceCriticalValueRate").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritClassFiCriticalStrikeValueRate").innerHTML) == 0) { document.getElementById("TabCritClassFiCriticalStrikeValueRate").style.display = "none"; }
		else { document.getElementById("TabCritClassFiCriticalStrikeValueRate").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritClassFiStanceCriticalValueRate").innerHTML) == 0) { document.getElementById("TabCritClassFiStanceCriticalValueRate").style.display = "none"; }
		else { document.getElementById("TabCritClassFiStanceCriticalValueRate").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritClassGuTwinMachineGunMasteryValueRate").innerHTML) == 0) { document.getElementById("TabCritClassGuTwinMachineGunMasteryValueRate").style.display = "none"; }
		else { document.getElementById("TabCritClassGuTwinMachineGunMasteryValueRate").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritClassGuZeroRangeCriticalValueRate").innerHTML) == 0) { document.getElementById("TabCritClassGuZeroRangeCriticalValueRate").style.display = "none"; }
		else { document.getElementById("TabCritClassGuZeroRangeCriticalValueRate").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritClassBrKatanaGearValueRate").innerHTML) == 0) { document.getElementById("TabCritClassBrKatanaGearValueRate").style.display = "none"; }
		else { document.getElementById("TabCritClassBrKatanaGearValueRate").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritClassBrStanceCriticalValueRate").innerHTML) == 0) { document.getElementById("TabCritClassBrStanceCriticalValueRate").style.display = "none"; }
		else { document.getElementById("TabCritClassBrStanceCriticalValueRate").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritClassBoStanceCriticalValueRate").innerHTML) == 0) { document.getElementById("TabCritClassBoStanceCriticalValueRate").style.display = "none"; }
		else { document.getElementById("TabCritClassBoStanceCriticalValueRate").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritClassHrWeakAttackCriticalValueRate").innerHTML) == 0) { document.getElementById("TabCritClassHrWeakAttackCriticalValueRate").style.display = "none"; }
		else { document.getElementById("TabCritClassHrWeakAttackCriticalValueRate").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritClassPhCriticalStreamValueRate").innerHTML) == 0) { document.getElementById("TabCritClassPhCriticalStreamValueRate").style.display = "none"; }
		else { document.getElementById("TabCritClassPhCriticalStreamValueRate").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritClassEtJustAttackCriticalValueRate").innerHTML) == 0) { document.getElementById("TabCritClassEtJustAttackCriticalValueRate").style.display = "none"; }
		else { document.getElementById("TabCritClassEtJustAttackCriticalValueRate").style.display = "inline"; }
		if(parseFloat(document.getElementById("TabCritRingRValueRate").innerHTML) == 0) { document.getElementById("TabCritRingRValueRate").style.display = "none"; }
		else { document.getElementById("TabCritRingRValueRate").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritSKyuu1ValueRate").innerHTML) == 0) { document.getElementById("TabCritSKyuu1ValueRate").style.display = "none"; }
		else { document.getElementById("TabCritSKyuu1ValueRate").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritSKyuu2ValueRate").innerHTML) == 0) { document.getElementById("TabCritSKyuu2ValueRate").style.display = "none"; }
		else { document.getElementById("TabCritSKyuu2ValueRate").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritSKyuu3ValueRate").innerHTML) == 0) { document.getElementById("TabCritSKyuu3ValueRate").style.display = "none"; }
		else { document.getElementById("TabCritSKyuu3ValueRate").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritSKyuu4ValueRate").innerHTML) == 0) { document.getElementById("TabCritSKyuu4ValueRate").style.display = "none"; }
		else { document.getElementById("TabCritSKyuu4ValueRate").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritSKyuu5ValueRate").innerHTML) == 0) { document.getElementById("TabCritSKyuu5ValueRate").style.display = "none"; }
		else { document.getElementById("TabCritSKyuu5ValueRate").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritSKyuu6ValueRate").innerHTML) == 0) { document.getElementById("TabCritSKyuu6ValueRate").style.display = "none"; }
		else { document.getElementById("TabCritSKyuu6ValueRate").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritETCTechterValueRate").innerHTML) == 0) { document.getElementById("TabCritETCTechterValueRate").style.display = "none"; }
		else { document.getElementById("TabCritETCTechterValueRate").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritETCBouncerValueRate").innerHTML) == 0) { document.getElementById("TabCritETCBouncerValueRate").style.display = "none"; }
		else { document.getElementById("TabCritETCBouncerValueRate").style.display = "inline"; }
		
		if(parseInt(document.getElementById("TabCritETCNaturalValueCDMG").innerHTML) == 100) { document.getElementById("TabCritETCNaturalValueCDMG").style.display = "none"; }
		else { document.getElementById("TabCritETCNaturalValueCDMG").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritClassHuFuryStanceCriticalValueCDMG").innerHTML) == 100) { document.getElementById("TabCritClassHuFuryStanceCriticalValueCDMG").style.display = "none"; }
		else { document.getElementById("TabCritClassHuFuryStanceCriticalValueCDMG").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritClassFiCriticalStrikeValueCDMG").innerHTML) == 100) { document.getElementById("TabCritClassFiCriticalStrikeValueCDMG").style.display = "none"; }
		else { document.getElementById("TabCritClassFiCriticalStrikeValueCDMG").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritClassFiStanceCriticalValueCDMG").innerHTML) == 100) { document.getElementById("TabCritClassFiStanceCriticalValueCDMG").style.display = "none"; }
		else { document.getElementById("TabCritClassFiStanceCriticalValueCDMG").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritClassGuTwinMachineGunMasteryValueCDMG").innerHTML) == 100) { document.getElementById("TabCritClassGuTwinMachineGunMasteryValueCDMG").style.display = "none"; }
		else { document.getElementById("TabCritClassGuTwinMachineGunMasteryValueCDMG").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritClassGuZeroRangeCriticalValueCDMG").innerHTML) == 100) { document.getElementById("TabCritClassGuZeroRangeCriticalValueCDMG").style.display = "none"; }
		else { document.getElementById("TabCritClassGuZeroRangeCriticalValueCDMG").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritClassBrKatanaGearValueCDMG").innerHTML) == 100) { document.getElementById("TabCritClassBrKatanaGearValueCDMG").style.display = "none"; }
		else { document.getElementById("TabCritClassBrKatanaGearValueCDMG").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritClassBrStanceCriticalValueCDMG").innerHTML) == 100) { document.getElementById("TabCritClassBrStanceCriticalValueCDMG").style.display = "none"; }
		else { document.getElementById("TabCritClassBrStanceCriticalValueCDMG").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritClassBoStanceCriticalValueCDMG").innerHTML) == 100) { document.getElementById("TabCritClassBoStanceCriticalValueCDMG").style.display = "none"; }
		else { document.getElementById("TabCritClassBoStanceCriticalValueCDMG").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritClassHrWeakAttackCriticalValueCDMG").innerHTML) == 100) { document.getElementById("TabCritClassHrWeakAttackCriticalValueCDMG").style.display = "none"; }
		else { document.getElementById("TabCritClassHrWeakAttackCriticalValueCDMG").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritClassPhCriticalStreamValueCDMG").innerHTML) == 100) { document.getElementById("TabCritClassPhCriticalStreamValueCDMG").style.display = "none"; }
		else { document.getElementById("TabCritClassPhCriticalStreamValueCDMG").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritClassEtJustAttackCriticalValueCDMG").innerHTML) == 100) { document.getElementById("TabCritClassEtJustAttackCriticalValueCDMG").style.display = "none"; }
		else { document.getElementById("TabCritClassEtJustAttackCriticalValueCDMG").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritRingRValueCDMG").innerHTML) == 100) { document.getElementById("TabCritRingRValueCDMG").style.display = "none"; }
		else { document.getElementById("TabCritRingRValueCDMG").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritSKyuu1ValueCDMG").innerHTML) == 100) { document.getElementById("TabCritSKyuu1ValueCDMG").style.display = "none"; }
		else { document.getElementById("TabCritSKyuu1ValueCDMG").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritSKyuu2ValueCDMG").innerHTML) == 100) { document.getElementById("TabCritSKyuu2ValueCDMG").style.display = "none"; }
		else { document.getElementById("TabCritSKyuu2ValueCDMG").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritSKyuu3ValueCDMG").innerHTML) == 100) { document.getElementById("TabCritSKyuu3ValueCDMG").style.display = "none"; }
		else { document.getElementById("TabCritSKyuu3ValueCDMG").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritSKyuu4ValueCDMG").innerHTML) == 100) { document.getElementById("TabCritSKyuu4ValueCDMG").style.display = "none"; }
		else { document.getElementById("TabCritSKyuu4ValueCDMG").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritSKyuu5ValueCDMG").innerHTML) == 100) { document.getElementById("TabCritSKyuu5ValueCDMG").style.display = "none"; }
		else { document.getElementById("TabCritSKyuu5ValueCDMG").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritSKyuu6ValueCDMG").innerHTML) == 100) { document.getElementById("TabCritSKyuu6ValueCDMG").style.display = "none"; }
		else { document.getElementById("TabCritSKyuu6ValueCDMG").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritETCTechterValueCDMG").innerHTML) == 100) { document.getElementById("TabCritETCTechterValueCDMG").style.display = "none"; }
		else { document.getElementById("TabCritETCTechterValueCDMG").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritETCBouncerValueCDMG").innerHTML) == 100) { document.getElementById("TabCritETCBouncerValueCDMG").style.display = "none"; }
		else { document.getElementById("TabCritETCBouncerValueCDMG").style.display = "inline"; }
		
		if(parseInt(document.getElementById("TabCritETCNaturalValueUDMG").innerHTML) == 100) { document.getElementById("TabCritETCNaturalValueUDMG").style.display = "none"; }
		else { document.getElementById("TabCritETCNaturalValueUDMG").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritClassHuFuryStanceCriticalValueUDMG").innerHTML) == 100) { document.getElementById("TabCritClassHuFuryStanceCriticalValueUDMG").style.display = "none"; }
		else { document.getElementById("TabCritClassHuFuryStanceCriticalValueUDMG").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritClassFiCriticalStrikeValueUDMG").innerHTML) == 100) { document.getElementById("TabCritClassFiCriticalStrikeValueUDMG").style.display = "none"; }
		else { document.getElementById("TabCritClassFiCriticalStrikeValueUDMG").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritClassFiStanceCriticalValueUDMG").innerHTML) == 100) { document.getElementById("TabCritClassFiStanceCriticalValueUDMG").style.display = "none"; }
		else { document.getElementById("TabCritClassFiStanceCriticalValueUDMG").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritClassGuTwinMachineGunMasteryValueUDMG").innerHTML) == 100) { document.getElementById("TabCritClassGuTwinMachineGunMasteryValueUDMG").style.display = "none"; }
		else { document.getElementById("TabCritClassGuTwinMachineGunMasteryValueUDMG").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritClassGuZeroRangeCriticalValueUDMG").innerHTML) == 100) { document.getElementById("TabCritClassGuZeroRangeCriticalValueUDMG").style.display = "none"; }
		else { document.getElementById("TabCritClassGuZeroRangeCriticalValueUDMG").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritClassBrKatanaGearValueUDMG").innerHTML) == 100) { document.getElementById("TabCritClassBrKatanaGearValueUDMG").style.display = "none"; }
		else { document.getElementById("TabCritClassBrKatanaGearValueUDMG").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritClassBrStanceCriticalValueUDMG").innerHTML) == 100) { document.getElementById("TabCritClassBrStanceCriticalValueUDMG").style.display = "none"; }
		else { document.getElementById("TabCritClassBrStanceCriticalValueUDMG").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritClassBoStanceCriticalValueUDMG").innerHTML) == 100) { document.getElementById("TabCritClassBoStanceCriticalValueUDMG").style.display = "none"; }
		else { document.getElementById("TabCritClassBoStanceCriticalValueUDMG").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritClassHrWeakAttackCriticalValueUDMG").innerHTML) == 100) { document.getElementById("TabCritClassHrWeakAttackCriticalValueUDMG").style.display = "none"; }
		else { document.getElementById("TabCritClassHrWeakAttackCriticalValueUDMG").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritClassPhCriticalStreamValueUDMG").innerHTML) == 100) { document.getElementById("TabCritClassPhCriticalStreamValueUDMG").style.display = "none"; }
		else { document.getElementById("TabCritClassPhCriticalStreamValueUDMG").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritClassEtJustAttackCriticalValueUDMG").innerHTML) == 100) { document.getElementById("TabCritClassEtJustAttackCriticalValueUDMG").style.display = "none"; }
		else { document.getElementById("TabCritClassEtJustAttackCriticalValueUDMG").style.display = "inline"; }
		if(parseFloat(document.getElementById("TabCritRingRValueUDMG").innerHTML) == 100) { document.getElementById("TabCritRingRValueUDMG").style.display = "none"; }
		else { document.getElementById("TabCritRingRValueUDMG").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritSKyuu1ValueUDMG").innerHTML) == 100) { document.getElementById("TabCritSKyuu1ValueUDMG").style.display = "none"; }
		else { document.getElementById("TabCritSKyuu1ValueUDMG").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritSKyuu2ValueUDMG").innerHTML) == 100) { document.getElementById("TabCritSKyuu2ValueUDMG").style.display = "none"; }
		else { document.getElementById("TabCritSKyuu2ValueUDMG").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritSKyuu3ValueUDMG").innerHTML) == 100) { document.getElementById("TabCritSKyuu3ValueUDMG").style.display = "none"; }
		else { document.getElementById("TabCritSKyuu3ValueUDMG").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritSKyuu4ValueUDMG").innerHTML) == 100) { document.getElementById("TabCritSKyuu4ValueUDMG").style.display = "none"; }
		else { document.getElementById("TabCritSKyuu4ValueUDMG").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritSKyuu5ValueUDMG").innerHTML) == 100) { document.getElementById("TabCritSKyuu5ValueUDMG").style.display = "none"; }
		else { document.getElementById("TabCritSKyuu5ValueUDMG").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritSKyuu6ValueUDMG").innerHTML) == 100) { document.getElementById("TabCritSKyuu6ValueUDMG").style.display = "none"; }
		else { document.getElementById("TabCritSKyuu6ValueUDMG").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritETCTechterValueUDMG").innerHTML) == 100) { document.getElementById("TabCritETCTechterValueUDMG").style.display = "none"; }
		else { document.getElementById("TabCritETCTechterValueUDMG").style.display = "inline"; }
		if(parseInt(document.getElementById("TabCritETCBouncerValueUDMG").innerHTML) == 100) { document.getElementById("TabCritETCBouncerValueUDMG").style.display = "none"; }
		else { document.getElementById("TabCritETCBouncerValueUDMG").style.display = "inline"; }
		
		if(document.getElementById("TabCritETCNaturalValueEDMG").innerHTML == "100.00%") { document.getElementById("TabCritETCNaturalValueEDMG").style.display = "none"; }
		else { document.getElementById("TabCritETCNaturalValueEDMG").style.display = "inline"; }
		if(document.getElementById("TabCritClassHuFuryStanceCriticalValueEDMG").innerHTML == "100.00%") { document.getElementById("TabCritClassHuFuryStanceCriticalValueEDMG").style.display = "none"; }
		else { document.getElementById("TabCritClassHuFuryStanceCriticalValueEDMG").style.display = "inline"; }
		if(document.getElementById("TabCritClassFiCriticalStrikeValueEDMG").innerHTML == "100.00%") { document.getElementById("TabCritClassFiCriticalStrikeValueEDMG").style.display = "none"; }
		else { document.getElementById("TabCritClassFiCriticalStrikeValueEDMG").style.display = "inline"; }
		if(document.getElementById("TabCritClassFiStanceCriticalValueEDMG").innerHTML == "100.00%") { document.getElementById("TabCritClassFiStanceCriticalValueEDMG").style.display = "none"; }
		else { document.getElementById("TabCritClassFiStanceCriticalValueEDMG").style.display = "inline"; }
		if(document.getElementById("TabCritClassGuTwinMachineGunMasteryValueEDMG").innerHTML == "100.00%") { document.getElementById("TabCritClassGuTwinMachineGunMasteryValueEDMG").style.display = "none"; }
		else { document.getElementById("TabCritClassGuTwinMachineGunMasteryValueEDMG").style.display = "inline"; }
		if(document.getElementById("TabCritClassGuZeroRangeCriticalValueEDMG").innerHTML == "100.00%") { document.getElementById("TabCritClassGuZeroRangeCriticalValueEDMG").style.display = "none"; }
		else { document.getElementById("TabCritClassGuZeroRangeCriticalValueEDMG").style.display = "inline"; }
		if(document.getElementById("TabCritClassBrKatanaGearValueEDMG").innerHTML == "100.00%") { document.getElementById("TabCritClassBrKatanaGearValueEDMG").style.display = "none"; }
		else { document.getElementById("TabCritClassBrKatanaGearValueEDMG").style.display = "inline"; }
		if(document.getElementById("TabCritClassBrStanceCriticalValueEDMG").innerHTML == "100.00%") { document.getElementById("TabCritClassBrStanceCriticalValueEDMG").style.display = "none"; }
		else { document.getElementById("TabCritClassBrStanceCriticalValueEDMG").style.display = "inline"; }
		if(document.getElementById("TabCritClassBoStanceCriticalValueEDMG").innerHTML == "100.00%") { document.getElementById("TabCritClassBoStanceCriticalValueEDMG").style.display = "none"; }
		else { document.getElementById("TabCritClassBoStanceCriticalValueEDMG").style.display = "inline"; }
		if(document.getElementById("TabCritClassHrWeakAttackCriticalValueEDMG").innerHTML == "100.00%") { document.getElementById("TabCritClassHrWeakAttackCriticalValueEDMG").style.display = "none"; }
		else { document.getElementById("TabCritClassHrWeakAttackCriticalValueEDMG").style.display = "inline"; }
		if(document.getElementById("TabCritClassPhCriticalStreamValueEDMG").innerHTML == "100.00%") { document.getElementById("TabCritClassPhCriticalStreamValueEDMG").style.display = "none"; }
		else { document.getElementById("TabCritClassPhCriticalStreamValueEDMG").style.display = "inline"; }
		if(document.getElementById("TabCritClassEtJustAttackCriticalValueEDMG").innerHTML == "100.00%") { document.getElementById("TabCritClassEtJustAttackCriticalValueEDMG").style.display = "none"; }
		else { document.getElementById("TabCritClassEtJustAttackCriticalValueEDMG").style.display = "inline"; }
		if(document.getElementById("TabCritRingRValueEDMG").innerHTML == "100.00%") { document.getElementById("TabCritRingRValueEDMG").style.display = "none"; }
		else { document.getElementById("TabCritRingRValueEDMG").style.display = "inline"; }
		if(document.getElementById("TabCritSKyuu1ValueEDMG").innerHTML == "100.00%") { document.getElementById("TabCritSKyuu1ValueEDMG").style.display = "none"; }
		else { document.getElementById("TabCritSKyuu1ValueEDMG").style.display = "inline"; }
		if(document.getElementById("TabCritSKyuu2ValueEDMG").innerHTML == "100.00%") { document.getElementById("TabCritSKyuu2ValueEDMG").style.display = "none"; }
		else { document.getElementById("TabCritSKyuu2ValueEDMG").style.display = "inline"; }
		if(document.getElementById("TabCritSKyuu3ValueEDMG").innerHTML == "100.00%") { document.getElementById("TabCritSKyuu3ValueEDMG").style.display = "none"; }
		else { document.getElementById("TabCritSKyuu3ValueEDMG").style.display = "inline"; }
		if(document.getElementById("TabCritSKyuu4ValueEDMG").innerHTML == "100.00%") { document.getElementById("TabCritSKyuu4ValueEDMG").style.display = "none"; }
		else { document.getElementById("TabCritSKyuu4ValueEDMG").style.display = "inline"; }
		if(document.getElementById("TabCritSKyuu5ValueEDMG").innerHTML == "100.00%") { document.getElementById("TabCritSKyuu5ValueEDMG").style.display = "none"; }
		else { document.getElementById("TabCritSKyuu5ValueEDMG").style.display = "inline"; }
		if(document.getElementById("TabCritSKyuu6ValueEDMG").innerHTML == "100.00%") { document.getElementById("TabCritSKyuu6ValueEDMG").style.display = "none"; }
		else { document.getElementById("TabCritSKyuu6ValueEDMG").style.display = "inline"; }
		if(document.getElementById("TabCritSenzaiValueEDMG").innerHTML == "100.00%") { document.getElementById("TabCritSenzaiValueEDMG").style.display = "none"; }
		else { document.getElementById("TabCritSenzaiValueEDMG").style.display = "inline"; }
		if(document.getElementById("TabCritETCTechterValueEDMG").innerHTML == "100.00%") { document.getElementById("TabCritETCTechterValueEDMG").style.display = "none"; }
		else { document.getElementById("TabCritETCTechterValueEDMG").style.display = "inline"; }
		if(document.getElementById("TabCritETCBouncerValueEDMG").innerHTML == "100.00%") { document.getElementById("TabCritETCBouncerValueEDMG").style.display = "none"; }
		else { document.getElementById("TabCritETCBouncerValueEDMG").style.display = "inline"; }
	}