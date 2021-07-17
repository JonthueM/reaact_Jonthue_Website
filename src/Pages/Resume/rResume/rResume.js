import React from 'react';
import styled from "styled-components";
import BackgroundImage from './images/background.png';
import {ImageColumn, ContentColumn, PageLayout} from "../../../directory";


const Center = styled.div`
    display: flex;
    padding-left: 1%;
    padding-top: 2%;
`;

const ResumeContainer = styled.div`
    width:322px;
	height:186px;
	position:absolute;
`;

const BottomSection = styled.div`
    box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
	width:322px;
	height:53px;
	position:absolute;
	left:0px;
	top:133px;
`;

const TopRSection = styled.div`
    box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
	width:322px;
	height:53px;
	position:absolute;
	left:0px;
	top:0px;
`;

const Bottom2 = styled.div`
    background-color:rgba(0, 0, 0, 0.3100000023841858);
	width:322px;
	height:53px;
	position:absolute;
	left:0px;
	top:0px;
	border-top-left-radius:2px;
	border-top-right-radius:2px;
	border-bottom-left-radius:2px;
	border-bottom-right-radius:2px;
`;
const CTAResume = styled.span`
    color:rgba(255, 255, 255, 1);
	width:240.18032836914062px;
	height:28px;
	position:absolute;
	left:64px;
	top:13px;
	font-family:Raleway;
	text-align:left;
	font-size:24px;
	letter-spacing:58;
`;

const Icon = styled.div`
    width:34px;
	height:38px;
	position:absolute;
	left:11px;
	top:8px;
	background-image:url(images/iconfinder_acrobat_2529522_1.png);
	background-repeat:no-repeat;
	background-size:cover;
`;
const TopSection = styled.div`
    box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
	width:322px;
	height:133px;
	position:absolute;
	left:0px;
	top:0px;
	background-image:url(images/image_7.png);
	background-repeat:no-repeat;
	background-size:cover;
`;

const ResumeContent = () =>{
	return(
		<React.Fragment>
			<Center>
					<ResumeContainer>
						<BottomSection>
							<TopRSection>
								<Bottom2></Bottom2>
								<CTAResume>
									<Icon></Icon>
								</CTAResume>
							</TopRSection>
						</BottomSection><TopSection></TopSection>
					</ResumeContainer>
				
			</Center>
		</React.Fragment>
	)
}

function rResume(){
    
		return(
			<React.Fragment>
					<PageLayout 
					RightColumn={
						<ContentColumn>
							<ResumeContent/>
						</ContentColumn>
					}
					LeftColumn={
						<ImageColumn Image={BackgroundImage} />
					}
					 />
        	</React.Fragment>
		);
        
    
}
export  {rResume};