'use client'

import { OrbitControls } from "three/addons";
import { useEffect, useRef } from "react";
import * as Three from "three";
import { Pane } from 'tweakpane/dist/tweakpane.js';



export default function Training(){
const ref=useRef(); 

useEffect(()=>{
    if(ref.current===null) return
    const cubeGeometry = new Three.BoxGeometry(1,1,1);
    const torusKnotGeometry = new Three.TorusKnotGeometry(0.5, 0.15, 100, 16);
    const planeGeometry = new Three.PlaneGeometry(1,1);
    const sphereGeometry = new Three.SphereGeometry(0.5, 500, 500);
    const cylinderGeometry = new Three.CylinderGeometry(0.5, 0.5, 1, 32);
    const textLoader = new Three.TextureLoader();
    const textureTest = textLoader.load('static/textures/whispy-grass-meadow-bl (2)/whispy-grass-meadow-bl/wispy-grass-meadow_albedo.png')
    // textureTest.repeat.set(2,2);
    // textureTest.wrapS = Three.MirroredRepeatWrapping
    // textureTest.wrapT = Three.MirroredRepeatWrapping
    const cubeMaterial = new Three.MeshPhysicalMaterial();
    cubeMaterial.map =textureTest;

    
    //cubeMaterial.color = new Three.Color("red");
    // cubeMaterial.transparent = true;
    // cubeMaterial.opacity = 0.5;
    cubeMaterial.side = Three.DoubleSide;
    cubeMaterial.fog = false;
    // cubeMaterial.shininess = 0.5;
    cubeMaterial.metalness = 0.5;
    cubeMaterial.roughness = 0.5;



    const cubeMesh = new Three.Mesh(cubeGeometry, cubeMaterial);
    const cubeMesh2 = new Three.Mesh(cubeGeometry, cubeMaterial);
    cubeMesh2.position.x +=4;
    const torusKnot = new Three.Mesh(torusKnotGeometry, cubeMaterial);
    torusKnot.position.x +=2;
    const sphere = new Three.Mesh(sphereGeometry, cubeMaterial);
    sphere.position.y +=2;
    
    const cylinder = new Three.Mesh(cylinderGeometry, cubeMaterial);
    cylinder.position.x +=2;
    cylinder.position.y +=2;

    const plane = new Three.Mesh(planeGeometry, cubeMaterial);
    plane.position.x -=2;

    // cubeMesh.rotation.y=Three.MathUtils.degToRad(90);
        //  cubeMesh.rotation.x=Three.MathUtils.degToRad(90);
        //  cubeMesh.rotation.y=Three.MathUtils.degToRad(90);
        //  cubeMesh.rotation.x=Three.MathUtils.degToRad(0);
        
    const fog = new Three.Fog("white", 1, 10); 
    const scene = new Three.Scene();
    scene.fog = fog;
    // scene.background = new Three.Color("white");
    const pointLight = new Three.PointLight("white",6);
    pointLight.position.x +=2.5;
    pointLight.position.y +=1;
    const light = new Three.AmbientLight("white",0.5);
    
    const pane = new Pane();
    console.log(pane,"3d");
    pane.addBinding(cubeMaterial, 'metalness', {min: 0, max: 1, step: 0.01});
    pane.addBinding(cubeMaterial, 'roughness', {min: 0, max: 1, step: 0.01});
    pane.addBinding(cubeMaterial, 'reflectivity', {min: 0, max: 1, step: 0.01});
    pane.addBinding(cubeMaterial, 'clearcoat', {min: 0, max: 1, step: 0.01});
    // pane.addBinding(cubeMaterial, 'shininess', {min: 0, max: 1, step: 0.01});
    const group = new Three.Group();
    group.add( cylinder, sphere, cubeMesh, cubeMesh2, plane, torusKnot)
    scene.add(group);
    scene.add(pointLight);
    scene.add(light);
    // scene.add(cylinder);
    // scene.add(sphere);
    // scene.add(cubeMesh);
    // scene.add(cubeMesh2);
    // scene.add(plane);
    // scene.add(torusKnot);
    console.log(scene);

    const camera = new Three.PerspectiveCamera(
        75,
        1,
        0.1,
        30
    )
    camera.position.z = 4;
    const canvas = ref.current;
    const axesHelper= new Three.AxesHelper(2);
    cubeMesh.add(axesHelper);
    const renderer = new Three.WebGLRenderer({canvas:canvas, antialias:true});
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
    const controls = new OrbitControls(camera, canvas);

    const clock = new Three.Clock();
    let previousTime=0; 

    const renderloop = ()=>{
        // group.children.forEach(child => {
        //     if(child instanceof Three.Mesh){
        //         child.rotation.x += 0.01;
        //     }
        // })
        renderer.setSize(window.innerWidth,window.innerHeight);
        camera.aspect=window.innerWidth/window.innerHeight;
        camera.updateProjectionMatrix();
        controls.update();
        const currentTime = clock.getElapsedTime();
        const delta = currentTime - previousTime;
        previousTime = currentTime;
        cubeMesh.rotation.y += Three.MathUtils.degToRad(1) * delta * 30 ;
        cubeMesh.scale.x = Math.sin(currentTime) + 1;
        renderer.render(scene, camera);
        window.requestAnimationFrame(renderloop);
        
    }
    renderloop();
    console.log("amjad",window.devicePixelRatio);
    
},[]);




    return(
        <canvas id="threejs" ref={ref}></canvas>
    )
}