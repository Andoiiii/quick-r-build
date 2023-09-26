"use client"; // Very important thing to include lest some random completely unrelated error code appears

import { useContext } from "react";
import { MasterContext, MasterDispatchContext } from "@/redux/ContextsProvider";

import { actionEntryCreate } from "@/redux/MasterReducer";

import PersonalInfoDisplay from "../_resume-components/personal-info";
import PersonalInfoEditor from "../_resume-components/personal-edit";
import EntryDisplay from "../_resume-components/entry-info";

export default function MasterEditor() {
  const masterResume = useContext(MasterContext);
  const dispatchMaster = useContext(MasterDispatchContext);

  return (
    <>
      <p>Master Interface</p>
      <div className="mx-10">
        <PersonalInfoDisplay />
        { masterResume.entries.map( (entry) => <EntryDisplay key={entry.entryID}/>)}

      </div>
      <p>Debug:</p>
      <pre>{JSON.stringify(masterResume, null, 2)}</pre>
      
      <form onSubmit={(e) => {e.preventDefault(); dispatchMaster(actionEntryCreate(e))}} className="text-black">
        <label for="title">Title: </label><input id="title" type="text"></input>
        <label for="subtitle">Subtitle: </label><input id="subtitle" type="text"></input>
        <label for="date">Date: </label><input id="date" type="text"></input>
        <label for="link">Link: </label><input id="link" type="text"></input>
        <input type="submit"></input>
      </form>
    </>
  );
}
