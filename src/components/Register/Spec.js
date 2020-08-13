import React from "react";
import InputWithPlus from "../CustomComponents/InputWithPlus";
import Internship from "../CustomComponents/Internship";


const Spec = ({ control, abilities, setAbilities, Extracurricular, setExtracurricular, WorkExperience, setWorkExperience }) => {
  return (
    <div>
      <h1>합격 당시 스펙</h1>
      <InputWithPlus name="abilites" placeholder="ex) 토익 xxx점" label={"보유 자격증 및 어학 시험 점수"} control={control} items={abilities} setItems={setAbilities} />
      <InputWithPlus name="Extracurricular" placeholder="ex) SK SUNNY 대학생 자원 봉사단" label="대외 활동" control={control} items={Extracurricular} setItems={setExtracurricular} />
      <Internship name="WorkExperience" label="주요 경력 및 인턴 경험" control={control} />
    </div>
  );
};

export default Spec;
