// Initial State, Reducer, and Action Generators for Master Resume
export const initialMaster = {
  personalInfo: { name: "", tel: "", linkedin: "", github: "", email: "", website: "", address: "" },
  entryID: 0,
  entries: [],
};

export function MasterReducer(draft, action) {
  switch (action.type) {
    case "personal/set":
      draft.personalInfo = action.payload;
      break;
    case "personal/reset":
      draft.personalInfo = action.payload;
      break;
    case "general/create":
      draft.entries.push({ ...action.payload, ID: draft.entryID++ });
      break;
    default:
      break;
  }
}

// Setting the Data for Personal Information, from the PI Editing Modal
export function actionPersonalSet(formSubmitEvent) {
  const { name, tel, linkedin, github, email, website, address } = formSubmitEvent.target.elements;
  return {
    type: "personal/set",
    payload: {
      // Empty Values should be turned into ""
      name: name.value.trim() || "",
      tel: tel.value.trim() || "",
      linkedin: linkedin.value.trim() || "",
      github: github.value.trim() || "",
      email: email.value.trim() || "",
      website: website.value.trim() || "",
      address: address.value.trim() || "",
    },
  };
}

// Resets all Data for Personal Information, from the Main Display Page
export function actionPersonalReset() {
  return {
    type: "personal/reset",
    payload: { name: "", tel: "", linkedin: "", github: "", email: "", website: "", address: "" },
  };
}

// Creates a new Entry, from an Entry Creation Modal
export function actionEntryCreate(formSubmitEvent) {
  const { title, subtitle, link, date } = formSubmitEvent.target.elements;
  return {
    type: "general/create",
    payload: { title: title.value.trim() || "", 
               subtitle: subtitle.value.trim() || "", 
               link: link.value.trim() || "", 
               date: date.value.trim() || "" ,
               desc: []},
  };
}
