import React from "react";
import Navigation from "./Navigation";

import {Link} from "react-router-dom";

import aevus from "../Icons/aevus_icon_w.svg";
import chromatic from "../Icons/chromatic_icon_w.svg";
import ambulo from "../Icons/ambulo_icon_w.svg";
import sh from "../Icons/SH_icon_w.svg";
import hh from "../Icons/HH_icon_w.svg";
import shift from "../Icons/shift_icon_w.svg";
import ocam from "../Icons/default_icon_w.svg";

import Project from "./Project";
import ProjectContainer from "./ProjectContainer";

export default class MainActivity extends React.Component {
    render() {
        return(
            <div>
                <Navigation/>
                <div style={{margin: 'auto', padding: '0 5% 0 5%', width: "60%"}}>
                        <div class="row">
                            <div class="col">
                                <ProjectContainer
                                    bg='rgba(61, 16, 112, .1)'
                                    bottom='0'
                                    color='#3d1070'
                                    description='Designed and developed interactive map as response to COVID-19'
                                    icon={ocam}
                                    left='20%'  
                                    link='ocam'
                                    name='Orbis Cascade Alliance Map'
                                    right='0'
                                    top='30%'
                                    type='Web Application'
                                    width='60%'
                                />
                            </div>
                            <div class="col">
                                <ProjectContainer
                                    bg='rgba(102, 143, 191, .1)'
                                    bottom='0'
                                    color='#668FBF'
                                    description='Collaborated and developed an app focusing on cameras and colors'
                                    icon={chromatic}
                                    left='20%'  
                                    link='chromatic'
                                    name='Chromatic'
                                    right='0'
                                    top='40%'
                                    type='Android Application'
                                    width='87%'
                                />
                            </div>
                            <div class="col">
                                <ProjectContainer
                                    bg='rgba(144, 218, 185, .1)'
                                    bottom='0'
                                    color='#90DAB9'
                                    description='Discover trails and capture natural scenery'
                                    icon={ambulo}
                                    left='25%'  
                                    link='ambulo'
                                    name='Ambulo'
                                    right='0'
                                    top='25%'
                                    type='Web Application'
                                    width='39%'
                                />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <ProjectContainer
                                    bg='rgba(67, 181, 230, .1)'
                                    bottom='0'
                                    color='#43B5E6'
                                    description='Learn more about what goes into nursing homes ratings'
                                    icon={sh}
                                    left='20%'  
                                    link='sh'
                                    name='Second Home'
                                    right='0'
                                    top='30%'
                                    type='Web Application'
                                    width='45%'
                                />
                            </div>
                            <div class="col">
                                <ProjectContainer
                                    bg='rgba(31, 179, 169, .1)'
                                    bottom='0'
                                    color='#1FB3A9'
                                    description='Rethinking campus transportation'
                                    icon={hh}
                                    left='15%'  
                                    link='hh'
                                    name='Husky Hotspots'
                                    right='0'
                                    top='15%'
                                    type='Bus Stop Concept'
                                    width='39%'
                                />
                            </div>
                            <div class="col">
                                <ProjectContainer
                                    bg='rgba(141, 137, 177, .1)'
                                    bottom='0'
                                    color='#8D89B1'
                                    description='Exercises in OS design'
                                    icon={shift}
                                    left='10%'  
                                    link='shift'
                                    name='Shift'
                                    right='0'
                                    top='27%'
                                    type='OS Concept'
                                    width='61%'
                                />
                            </div>
                        </div>
                        {/* <ProjectContainer
                            bg='rgba(144, 218, 199, .1)'
                            bottom='0'
                            color='#90DAC7'
                            description='Exploration in dealing with eczema'
                            icon={aevus}
                            left='20%'  
                            link='aevus'
                            name='Aevus'
                            right='0'
                            top='30%'
                            type='Android Application Concept'
                            width='80%'
                        /> */}
                </div>
            </div>
        );
    }
}