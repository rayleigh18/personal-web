<script>
	import Header from "../components/Header.svelte";    
</script>

<main>
    <Header/>
    <div>
        <h1>Hello! I'm</h1>
        <h1>Oktavianus Irvan Sitanggang</h1>
        <h2>I like to make things happen</h2>
        <h3>Software/Hardware developer</h3>
    </div>

    <div class="content-portfolio">
        <div>
            <h1>About</h1>
            <p>
                Hey, my name is Oktavianus Irvan Sitanggang and I use Okta as my nickname.
                My old and close friend call me Okta. I'm a software developer who work on
                many thing, front-end, back-end, architecture, microcontroller etc. I'm from 
                Indonesia. I like music, books, and interacting. I'm curious about how the 
                world work, and want to learn new things, especially technologies
            </p>
        </div>
    
        <div>
            <h1>Where I've worked</h1>
            <div>
                <h2>Paragon Technology and Innovation</h2>
                <h4 class="work-date">2021-2022</h4>
                <ul>
                    <li>Work as an intern</li>
                    <li>
                        I create robot with my teams that run automatically for factory use for my thesis 
                        using various sensor (e.g. camera, lidar, encoder) and actuator (mostly motor)
                    </li>
                    <li>For the mechanical, I use Inventor, 3d-print, drill, hammer, and other tools</li>
                    <li>For the electrical, I use Altium</li>
                    <li>For Robot Programming, I use ROS with c++ and python that run in </li>
                    <li>For microcontroller, use stm32 board and arduino</li>
                </ul>
            </div>
    
            <div>
                <h2>Samsung Research Institute Indonesia</h2>
                <h4 class="work-date">July 2022 - September 2022</h4>
                <ul>
                    <li>Work as full time employee</li>
                    <li>
                        In here, I create personal website that used in the internal company
                    </li>
                    <li>I work on backend using Spring Boot</li>
                    <li>I work on frontend using React</li>
                </ul>
            </div>
    
            <div>
                <h2>Xendit</h2>
                <h4 class="work-date">September 2022 - now</h4>
                <ul>
                    <li>Work as full time employee</li>
                    <li>In here, I work on development of software and application</li>
                    <li>Backend using Golang and Typescript</li>
                    <li>Frontend using Next.js/React and retool</li>
                    <li>Work on AWS and GCP</li>
                    <li>Work on Buddy Works and Github Actions</li>
                </ul>
            </div>
        </div>
    
        <div>
            <h1>Lets Connect</h1>
            <h2>LinkedIn</h2>
            <h2>Instagram</h2>
        </div>
    </div>

    
    
</main>

<style lang="scss">
    main {
        padding: 30px 10%;
        background-color: #0a192f;
        .content-portfolio {
            h1, h2, h3, h4, p, li {
                color: #ccd6f6;
            }        
        }
    }

    

    
</style>