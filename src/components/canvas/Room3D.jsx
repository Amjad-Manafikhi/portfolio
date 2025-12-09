'use client'

import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { useEffect, useRef, useState } from "react";
import * as Three from "three";
import { Pane } from 'tweakpane/dist/tweakpane.js';
import { Works } from '../../components';
import RoomCard from '../RoomCard';
import Card1 from '../cards/Card1';
import Card2 from '../cards/Card2';
import Card3 from '../cards/Card3';
import RoomTech from '../RoomTech';


export default function Room3D() {

    const ref = useRef();

    const card1Ref = useRef(null);
    const card2Ref = useRef(null);
    const card3Ref = useRef(null);
    const techRef = useRef(null);
    const projectsTitleRef = useRef(null);

    const leftWallRef = useRef(null);
    const endWallRef = useRef(null);

    const [ready, setReady] = useState(false);
    useEffect(() => {
        if (!card1Ref.current) return;
        if (!card2Ref.current) return;
        if (!card3Ref.current) return;
        const scene = new Three.Scene();







        const planeGeometry = new Three.PlaneGeometry(11, 11);
        const textLoader = new Three.TextureLoader();
        const wallTexture = textLoader.load('static/textures/stacked-stone-siding-bl/stacked-stone-siding-bl/stacked-stone-siding_albedo.png')
        const floorTexture = textLoader.load('static/textures/hungarian-point-flooring-bl/hungarian-point-flooring-bl/hungarian-point-flooring_albedo.png')
        const wallNormalTexture = textLoader.load('static/textures/stacked-stone-siding-bl/stacked-stone-siding-bl/stacked-stone-siding_normal-ogl.png')
        const wallMaterial = new Three.MeshPhysicalMaterial();
        const floorMaterial = new Three.MeshPhysicalMaterial();
        wallMaterial.map = wallTexture
        wallMaterial.normalMap = wallNormalTexture
        floorMaterial.side = Three.DoubleSide;
        floorMaterial.map = floorTexture;
        floorMaterial.metalness = 0.5;
        floorMaterial.roughness = 0.5;
         const pointLight = new Three.PointLight('#FFFACD', 10);
        // const pointLight2 = new Three.PointLight('cyan', 10,0,3);
        // pointLight2.position.x = -5;
        // pointLight2.position.z = -2.8;
        // pointLight2.position.y = 1;
        // // pointLight2.rotation.x=-2;
         pointLight.position.x = 3.4;
         pointLight.position.z = -3.4;
         //pointLight.rotation.x=2;
         scene.add(pointLight);
        // scene.add(pointLight2);
        

        floorTexture.repeat.set(4, 4);
        floorTexture.wrapS = Three.MirroredRepeatWrapping
        floorTexture.wrapT = Three.MirroredRepeatWrapping
        wallTexture.repeat.set(4, 4);
        wallTexture.wrapS = Three.MirroredRepeatWrapping
        wallTexture.wrapT = Three.MirroredRepeatWrapping
        wallNormalTexture.repeat.set(4, 4);
        wallNormalTexture.wrapS = Three.MirroredRepeatWrapping
        wallNormalTexture.wrapT = Three.MirroredRepeatWrapping

        // const pane = new Pane();
        // pane.addBinding(wallMaterial, 'metalness', { min: 0, max: 1, step: 0.01 });
        // pane.addBinding(wallMaterial, 'roughness', { min: 0, max: 1, step: 0.01 });
        // pane.addBinding(wallMaterial, 'reflectivity', { min: 0, max: 1, step: 0.01 });
        // pane.addBinding(wallMaterial, 'clearcoat', { min: 0, max: 1, step: 0.01 });

        //const cubeMesh = new Three.Mesh(cubeGeometry, cubeMaterial);
        const leftWall = new Three.Mesh(planeGeometry, wallMaterial);
        const rightWall = new Three.Mesh(planeGeometry, wallMaterial);
        const endWall = new Three.Mesh(planeGeometry, wallMaterial);
        const floor = new Three.Mesh(planeGeometry, floorMaterial);
        leftWallRef.current = leftWall
        endWallRef.current = endWall
        const light = new Three.AmbientLight("white", 0.0);
        
        const plantLight = new Three.SpotLight("green", 20); // intensity
        plantLight.position.set(0, 3, 2); // above the model
        plantLight.rotateY(Math.PI/2); // above the model

        plantLight.angle = Math.PI / 8;     // narrow beam (like real plantLight)
        plantLight.penumbra = 1;          // soft edges
        plantLight.decay = 1;               // realistic falloff
        plantLight.distance = 30;           // how far light travels

        plantLight.castShadow = true;
        plantLight.shadow.mapSize.width = 2048;
        plantLight.shadow.mapSize.height = 2048;
        plantLight.shadow.bias = -0.0001;

        // IMPORTANT: plantLight must aim at something
        plantLight.target.position.set(4.8, -1.7, 3); // point on your wall or model
        scene.add(plantLight.target);
                
        scene.add(plantLight);


        const plantLight2 = new Three.SpotLight("white", 5); // intensity
        plantLight2.position.set(0, 3, 2); // above the model
        plantLight2.rotateY(Math.PI/2); // above the model

        plantLight2.angle = Math.PI / 8;     // narrow beam (like real plantLight2)
        plantLight2.penumbra = 1;          // soft edges
        plantLight2.decay = 1;               // realistic falloff
        plantLight2.distance = 30;           // how far light travels

        plantLight2.castShadow = true;
        plantLight2.shadow.mapSize.width = 2048;
        plantLight2.shadow.mapSize.height = 2048;
        plantLight2.shadow.bias = -0.0001;

        // IMPORTANT: plantLight2 must aim at something
        plantLight2.target.position.set(4.8, -1.7, 3); // point on your wall or model
        scene.add(plantLight2.target);
                
        scene.add(plantLight2);


        const projectsLight = new Three.SpotLight("#FFFACD", 7); // intensity
        projectsLight.position.set(0, 3.5, 2); // above the model
        projectsLight.rotateY(-Math.PI/2); // above the model

        projectsLight.angle = Math.PI / 5;     // narrow beam (like real projectsLight)
        projectsLight.penumbra = 1;          // soft edges
        projectsLight.decay = 1;               // realistic falloff
        projectsLight.distance = 10;           // how far light travels

        projectsLight.castShadow = true;
        projectsLight.shadow.mapSize.width = 2048;
        projectsLight.shadow.mapSize.height = 2048;
        projectsLight.shadow.bias = -0.0001;

        // IMPORTANT: projectsLight must aim at something
        projectsLight.target.position.set(-4.8, 0, 0.2); // point on your wall or model
        scene.add(projectsLight.target);
                
        scene.add(projectsLight);
        
        const camera = new Three.PerspectiveCamera(
            75,
            1,
            0.1,
            30
        );
        camera.position.set(0, -0.5, 4);   // eye height

        const canvas = ref.current;
        const renderer = new Three.WebGLRenderer({ canvas: canvas, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // ----------- FPS CONTROLS (added) ------------
        const controls = new PointerLockControls(camera, document.body);
        
        const start = () => controls.lock();
        window.addEventListener("click", start);
        scene.add(controls.getObject());

        let moveForward = false;
        let moveBackward = false;
        let moveLeft = false;
        let moveRight = false;

        document.addEventListener('keydown', (e) => {
            switch (e.key) {
                case 'w': moveForward = true; break;
                case 's': moveBackward = true; break;
                case 'a': moveLeft = true; break;
                case 'd': moveRight = true; break;
            }
        });

        document.addEventListener('keyup', (e) => {
            switch (e.key) {
                case 'w': moveForward = false; break;
                case 's': moveBackward = false; break;
                case 'a': moveLeft = false; break;
                case 'd': moveRight = false; break;
            }
        });

        // ------------------------------------------------
        
        const clock = new Three.Clock();
        let previousTime = 0;

        leftWall.position.x = -5;
        leftWall.rotation.y = 3.2 / 2;
        rightWall.position.x = 5;
        rightWall.rotation.y = -(3.2) / 2;
        endWall.position.z = -5;
        floor.position.y = -3;
        floor.rotation.x = (3.2) / 2;

        const axesHelper = new Three.AxesHelper(2);
        //cubeMesh.add(axesHelper);
        
        //scene.add(cubeMesh);
        scene.add(light);
        scene.add(leftWall);
        scene.add(rightWall);
        scene.add(endWall);
        scene.add(floor);

        // Load GLTF
        const loader = new GLTFLoader();
        loader.load(
            '/desktop_pc/scene.gltf',
            (gltf) => {
                const model = gltf.scene;
                model.scale.set(0.3, 0.3, 0.3);
                model.position.set(0.5, -1.25, -4.15);
                model.rotation.y = -(3.2) / 2;
                scene.add(model);
            },
            undefined,
            (error) => console.error(error)
        );

        loader.load(
            '/floor_lamp/scene.gltf',
            (gltf) => {
                const model = gltf.scene;
                model.scale.set(1.6, 1.6, 1.6);
                model.position.set(0, -2.8, 17.9);
                model.rotation.y = -(3.6) / 2;
                scene.add(model);
            },
            undefined,
            (error) => console.error(error)
        );
        
        loader.load(
            '/office_chair_gaming_chair/scene.gltf',
            (gltf) => {
                const model = gltf.scene;
                model.scale.set(2, 2, 2);
                model.position.set(0.5, -2.8, -2);
                model.rotation.y = (3.2) ;
                scene.add(model);
            },
            undefined,
            (error) => console.error(error)
        );

        loader.load(
            '/modular_plant_shelf/scene.gltf',
            (gltf) => {
                const model = gltf.scene;
                model.scale.set(1, 1, 1);
                model.position.set(4.8, -1.7, 3);
                model.rotation.y = (3.15)/2 ;
                scene.add(model);
            },
            undefined,
            (error) => console.error(error)
        );

        floor.receiveShadow = true;
        leftWall.receiveShadow = true;
        rightWall.receiveShadow = true;
        endWall.receiveShadow = true;
        
        
        
        
        renderer.shadowMap.enabled = true;
renderer.shadowMap.type = Three.PCFSoftShadowMap;
        // import("html2canvas").then(({ default: html2canvas }) => {
        //     html2canvas(cardRef.current, {
        //         scale: 4, // increase resolution (2–6 recommended)
        //         useCORS: true
        //     }).then((canvas) => {
        //         const texture = new Three.CanvasTexture(canvas);

        //         const geometry = new Three.PlaneGeometry(2, 1.2); // match your card aspect ratio
        //         const material = new Three.MeshBasicMaterial({ map: texture });

        //         const mesh = new Three.Mesh(geometry, material);

        //         // position on wall
        //         mesh.position.set(0, 0, 0.01);
        //         leftWall.add(mesh);
        //     });
        // });
        const renderloop = () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            controls.update()
            const time = clock.getElapsedTime();
            const delta = time - previousTime;
            previousTime = time;

            // ------------- FPS movement ------------
            const speed = 6;

            if (controls.isLocked) {
                if (moveForward) controls.moveForward(speed * delta);
                if (moveBackward) controls.moveForward(-speed * delta);
                if (moveLeft) controls.moveRight(-speed * delta);
                if (moveRight) controls.moveRight(speed * delta);
            }
            const eps = 0.5;
            const xMax = rightWall.position.x - eps;
            const xMin = leftWall.position.x + eps;
            const zMax = 5 ;
            const zMin = endWall.position.z + eps;

            controls.getObject().position.x = Math.min(Math.max(controls.getObject().position.x, xMin), xMax);
            controls.getObject().position.z = Math.min(Math.max(controls.getObject().position.z, zMin), zMax);

            // ---------------------------------------
            
            renderer.render(scene, camera);
            requestAnimationFrame(renderloop);
        };
        
        renderloop();
        setReady(true);

    }, []);

    return (
        <div className='relative z-0'>
            <canvas id="threejs" ref={ref} className=''></canvas>
            <div >

                <div 
                ref={card1Ref} 
                className="-z-10 w-[360px] h-auto overflow-hidden absolute top-0 left-0 opacity-100 pointer-events-none"
                >
                    <Card1 />
                </div >

                <div 
                ref={card2Ref} 
                className="-z-10 w-[360px] h-auto overflow-hidden absolute top-0 left-0 opacity-100 pointer-events-none"
                >
                    <Card2 />
                </div>

                <div 
                ref={card3Ref} 
                className={`-z-10 w-[360px] h-auto overflow-hidden absolute top-0 left-0 opacity-100 pointer-events-none`}
                >
                    <Card3 />
                </div>
            </div>
            <div
            ref={techRef}
            className={` -z-10 w-full h-auto overflow-hidden absolute top-0 left-0 opacity-100 pointer-events-none`}
            >
                <RoomTech/>
            </div>
            <div
            ref={projectsTitleRef}
            className={` -z-10 w-[450px] mx-auto h-[100px] overflow-hidden absolute top-0 left-0 opacity-100 pointer-events-none`}
            >
                <h1 className='text-white text-3xl mx-auto '>My Projects</h1>
            </div>
            <div className='absolute p-2 px-4 text-xs top-4 right-4 rounded-sm text-gray-300 bg-[#28292E]'>
                <p>Click any where to start.</p>
                <p>Press Esc to show your cursor.</p>
                
            </div>

            <RoomCard cardRef={card1Ref} leftWall={leftWallRef} size={{ width: 1.8, height: 2.5 }} position={{ x: -3, y: -0.5, z: 0.01 }} ready={ready} />
            <RoomCard cardRef={card2Ref} leftWall={leftWallRef} size={{ width: 1.8, height: 2.5 }} position={{ x: 0, y: -0.5, z: 0.01 }} ready={ready} />
            <RoomCard cardRef={card3Ref} leftWall={leftWallRef} size={{ width: 1.8, height: 2.5 }} position={{ x: 3, y: -0.5, z: 0.01 }} ready={ready} />
            <RoomCard cardRef={projectsTitleRef} leftWall={leftWallRef} size={{ width: 8, height: 3 }} position={{ x: 0, y: 3, z: 0.01 }} ready={ready} />
            <RoomCard cardRef={techRef} leftWall={endWallRef} size={{ width: 8, height: 3 }} position={{ x: 0, y: 2, z: 0.01 }} ready={ready} />

        </div>

    );
}
