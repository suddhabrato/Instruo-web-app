import React, { useState } from "react"

import HeroSection from "../Shared/HeroSection"
import ContactCard from "./ContactCard"

import kshitij from "../../assets/team/kshitij.jpg"
import arnab from "../../assets/team/arnab.jfif"
import rangan from "../../assets/team/rangan.jfif"
import rajesh from "../../assets/team/rajesh.jfif"

import devanshu from "../../assets/team/devanshu.jpg"
import sudo from "../../assets/team/sudo.jpeg"
import debopriya from "../../assets/team/debopriya.jpeg"
import aditya from "../../assets/team/aditya.jpeg"

import bhavesh from "../../assets/team/bhavesh.jfif"
import adityaRay from "../../assets/team/aditya.jfif"
import prajwal from "../../assets/team/prajwal.jfif"
import shivam from "../../assets/team/shivam.jfif"
import jainendra from "../../assets/team/jainendra.jpg"
import ayan from "../../assets/team/ayan.jpg"
import moulindu from "../../assets/team/moulindu.jpg"
import souvik from "../../assets/team/souvik.jpg"
import varnit from "../../assets/team/varnit.jpeg"

const ContactUs = () => {
	const [tabActive, setTabActive] = useState(2)
	return (
		<div>
			<HeroSection
				title={"Contact Us"}
				desc={"The team behind Instruo 12.0"}
				breadParams={[
					{
						title: "Instruo",
						url: "/",
					},
					{
						title: "Contact Us",
						url: "",
					},
				]}
			/>
			<div className="tabs tabs-boxed flex justify-center">
				<a
					className={`tab ${tabActive === 1 ? "tab-active" : ""}`}
					onClick={() => setTabActive(1)}>
					Public Relations Team
				</a>
				<a
					className={`tab ${tabActive === 2 ? "tab-active" : ""}`}
					onClick={() => setTabActive(2)}>
					Technical Team
				</a>
				<a
					className={`tab ${tabActive === 3 ? "tab-active" : ""}`}
					onClick={() => setTabActive(3)}>
					Core Team
				</a>
			</div>
			{tabActive === 1 && (
				<div className="flex flex-wrap gap-10 p-10 justify-center max-w-7xl mx-auto">
					<ContactCard
						avatarImg={kshitij}
						name="Kshitij Gupta"
						role="Sponsorship Team"
						linkedinUrl="https://www.linkedin.com/in/kshitij-gupta-900887241/"
					/>
					<ContactCard
						avatarImg={arnab}
						name="Arnab Sharma"
						role="Sponsorship Team"
						linkedinUrl="https://www.linkedin.com/in/arnab-sharma-56733118b/"
					/>
					<ContactCard
						avatarImg={rangan}
						name="Rangan Das"
						role="Publicity Team"
						linkedinUrl="https://www.linkedin.com/in/rangan-das-7550951a5/"
					/>
					<ContactCard
						name="Supriyo Paul"
						role="Publicity Team"
						linkedinUrl=""
					/>
					<ContactCard
						avatarImg={rajesh}
						name="Rajesh Jaiswar"
						role="Publicity Team"
						linkedinUrl="https://www.linkedin.com/in/rajesh-jaiswar1810/"
					/>
				</div>
			)}
			{tabActive === 2 && (
				<div className="flex flex-wrap gap-10 p-10 justify-center max-w-7xl mx-auto">
					<ContactCard
						avatarImg={devanshu}
						name="Devanshu Chatterjee"
						role="Website Developer"
						linkedinUrl="https://www.linkedin.com/in/devanshu-chatterjee-517645200/"
					/>
					<ContactCard
						avatarImg={sudo}
						name="Suddhabrato Ghosh"
						role="Website Developer"
						linkedinUrl="https://www.linkedin.com/in/suddhabrato-ghosh/"
					/>
					<ContactCard
						avatarImg={aditya}
						name="Aditya Das"
						role="Website Developer"
						linkedinUrl="https://www.linkedin.com/in/aditya-das-86069b202/"
					/>
					<ContactCard
						avatarImg={debopriya}
						name="Debopriya Roy"
						role="Website Developer"
						linkedinUrl="http://www.linkedin.com/in/debopriya-roy"
					/>
				</div>
			)}
			{tabActive === 3 && (
				<div className="flex flex-wrap gap-10 p-10 justify-center max-w-7xl mx-auto">
					<ContactCard
						avatarImg={bhavesh}
						name="Bhavesh Sonkar"
						role="Main Coordinator"
						linkedinUrl="https://www.linkedin.com/in/bhavesh-sonkar-3a0122201/"
					/>
					<ContactCard
						avatarImg={adityaRay}
						name="Aditya Kumar Ray"
						role="Main Coordinator"
						linkedinUrl="https://www.linkedin.com/in/aditya-kumar-ray/"
					/>
					<ContactCard
						name="Nishita Chaudhari"
						role="Main Coordinator"
						linkedinUrl="https://www.linkedin.com/in/nishita-chaudhuri-14751319b/"
					/>
					<ContactCard
						avatarImg={prajwal}
						name="Prajwal Nakade"
						role="Finance Team"
						linkedinUrl="https://www.linkedin.com/in/prajwal-nakade-0971981aa/"
					/>
					<ContactCard
						avatarImg={shivam}
						name="Shivam Kumar"
						role="Finance Team"
						linkedinUrl="https://www.linkedin.com/in/shivam-kumar-2965721ab/"
					/>
					<ContactCard
						avatarImg={jainendra}
						name="Jainendra Kumar Triloki"
						role="Finance Team"
						linkedinUrl="https://www.linkedin.com/in/jainendra-kumar-triloki-337432252/"
					/>
					<ContactCard
						name="Shubham Sahai"
						role="TA & Logistics"
						linkedinUrl="https://www.linkedin.com/in/shubham-sahai-716556220/"
					/>
					<ContactCard
						avatarImg={souvik}
						name="Souvik Sengupta"
						role="Design Team"
						linkedinUrl="https://www.linkedin.com/in/souvik-sengupta-059a99156/"
					/>
					<ContactCard
						avatarImg={moulindu}
						name="Moulindu Mandal"
						role="Design Team"
						linkedinUrl="https://www.linkedin.com/in/moulindu-mandal-20a728215/"
					/>
					<ContactCard
						avatarImg={ayan}
						name="Ayan Chatterjee"
						role="Design Team"
						linkedinUrl="https://www.linkedin.com/in/ayan-chatterjee-5025481a2/"
					/>
					<ContactCard
						avatarImg={varnit}
						name="Varnit Jain"
						role="Audio Visual Team"
						linkedinUrl="https://www.linkedin.com/in/ayan-chatterjee-5025481a2/"
					/>
				</div>
			)}
		</div>
	)
}

export default ContactUs
