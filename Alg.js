function Collide() {
    if(wall.x - car.x < car.width/2+wall.width/2) {
        car.velocityX = 0;
        Deformation = ((weight * speed * speed)/2)/22500;
        if (Deformation > 180) {
            car.shapeColor=color(255,0,0);        
        }   
        if (Deformation < 180 && Deformation > 100) {
            car.shapeColor=color(255,255,0);
        }
        if (Deformation < 100) {
            car.shapeColor = color(0,255,0);
        }
    }
}