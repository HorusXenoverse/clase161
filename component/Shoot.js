AFRAME.registerComponent("bullets",{
    init: function(){
        this.shootBullet()
    },
    shootBullet: function(){
        window.addEventListener("keydown", (e)=>{
            if (e.key === "z"){
                var bullet = document.createElement("a-entity")
                bullet.setAttribute("geometry", {primitive: "sphere", radius : 0.1})
                bullet.setAttribute("material", {color: "black"})
                var camera = document.querySelector("#camera")
                var cameraPosition = camera.getAttribute("position")
                bullet.setAttribute("position", {x: cameraPosition.x, y: cameraPosition.y, z: cameraPosition.z})

                var camera3D = document.querySelector("#camera").object3D
                var vector = new THREE.Vector3()
                
                camera3D.getWorldDirection(vector)

                bullet.setAttribute("velocity", vector.multiplyScalar(-10))

                var scene = document.querySelector("#scene")
                scene.appendChild(bullet)
            }
        })
    }
})