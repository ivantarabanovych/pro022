const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
    
        let circle = {
            x: 250,
            y: 250,
            radius: 50,
            color: 'blue',
            isDragging: false
        };

        function drawCircle() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
            ctx.fillStyle = circle.color;
            ctx.fill();
            ctx.closePath();
        }
    
        drawCircle();

        function isMouseInCircle(mouseX, mouseY) {
            const distX = mouseX - circle.x;
            const distY = mouseY - circle.y;
            return Math.sqrt(distX * distY + distY * distY) < circle.radius;
        }

        canvas.addEventListener('mousedown', (e) => {
            const mouseX = e.offsetX;
            const mouseY = e.offsetY;
    
            if (isMouseInCircle(mouseX, mouseY)) {
                circle.isDragging = true;
                circle.color = 'red'; 
                drawCircle();
            }
        });

        canvas.addEventListener('mousemove', (e) => {
            if (circle.isDragging) {
                circle.x = e.offsetX;
                circle.y = e.offsetY;
                drawCircle();
            }
        });

        canvas.addEventListener('mouseup', () => {
            circle.isDragging = false;
            circle.color = 'blue';
            drawCircle();
        });