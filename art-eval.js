// Helper for Art evaluation

function setSelectValue(id, value) {
  const element = document.getElementById(id);
  if (element) {
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLSelectElement.prototype,
      "value"
    ).set;
    nativeInputValueSetter.call(element, value);

    const changeEvent = new Event("change", { bubbles: true });
    element.dispatchEvent(changeEvent);
  }
}

document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "1":
      setSelectValue("matua-review-quality-selectField", "Pass");
      setSelectValue("matua-review-reason-selectField", "Pass_Acceptable");
      break;
    case "2":
      setSelectValue("matua-review-quality-selectField", "Pass");
      setSelectValue("matua-review-reason-selectField", "Pass_Ideal");
      break;
    case "3":
      setSelectValue("matua-review-quality-selectField", "Fail");
      setSelectValue("matua-review-reason-selectField", "Fail_Confusing");
      break;
    case "4":
      setSelectValue("matua-review-quality-selectField", "Fail");
      setSelectValue(
        "matua-review-reason-selectField",
        "Fail_UntranslatedText"
      );
      break;
    case "5":
      setSelectValue("matua-review-quality-selectField", "Fail");
      setSelectValue(
        "matua-review-reason-selectField",
        "Fail_IncorrectTranslations"
      );
      break;
    case "6":
      setSelectValue("matua-review-quality-selectField", "Fail");
      setSelectValue("matua-review-reason-selectField", "Fail_TextSize");
      break;
    case "7":
      setSelectValue("matua-review-quality-selectField", "Fail");
      setSelectValue(
        "matua-review-reason-selectField",
        "Fail_TruncationOrLayoutOrTextOverlap"
      );
      break;
    case "8":
      setSelectValue("matua-review-quality-selectField", "Fail");
      setSelectValue("matua-review-reason-selectField", "Fail_Other");
      break;
    case "n":
      setSelectValue("matua-review-quality-selectField", "NotApplicable");
      break;
  }
});
