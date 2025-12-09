import { useEffect } from "react";
import * as THREE from "three";
// type Props={
//     originalMesh:Three.Mesh<Three.PlaneGeometry, Three.MeshPhysicalMaterial, Three.Object3DEventMap>;
//     cardRef:RefObject<null|HTMLElement>;
//     size:{width:number, height:number};
//     position:{X:number,y:number,z:number};
// }
export default function RoomCard({ cardRef, leftWall, size, position, ready }) {
    useEffect(() => {
        console.log("asd", leftWall.current)
        console.log("asdf", cardRef.current)
        if (!cardRef?.current) return;
        if (!leftWall?.current) return;

        let isMounted = true;

        async function createCardTexture() {
            const html2canvas = (await import("html2canvas")).default;

            const canvas = await html2canvas(cardRef.current, {
                scale: 10,
                useCORS: true,
                backgroundColor: null,
            });

            if (!isMounted) return;

            const texture = new THREE.CanvasTexture(canvas);
            const geometry = new THREE.PlaneGeometry(size.width, size.height);
            const material = new THREE.MeshBasicMaterial({
                map: texture, transparent: true, emissive: new THREE.Color("white"),
                emissiveIntensity: 2
            });

            const mesh = new THREE.Mesh(geometry, material);
            mesh.position.set(position.x, position.y, position.z);

            leftWall.current.add(mesh);
        }

        createCardTexture();

        return () => {
            isMounted = false;
        };
    }, [cardRef, leftWall, ready]);

    return null; // this component renders nothing itself
}
