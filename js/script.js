
const figuras = []

let X1
let Y1
let X2
let Y2

let figuraElegida=1
let puntoMarcado=0

function setup() 
{
	createCanvas(windowWidth, windowHeight)
}

function draw()
{
	dibujarFiguras()
}

function dibujarFiguras()
{
	background("#2980B9")
	
	for(let i=0; i<figuras.length; i++) 
	{
		stroke(figuras[i].color)
		fill(figuras[i].color)

		switch(figuras[i].tipoFigura)
		{
			case 1:
				rect(figuras[i].x1, figuras[i].y1, figuras[i].x2-figuras[i].x1, figuras[i].y2-figuras[i].y1)
			break

			case 2:
				drawCircle(figuras[i].x1, figuras[i].y1, figuras[i].radio)
			break

			case 3:
				drawRect(figuras[i].x1, figuras[i].y1, figuras[i].x2, figuras[i].y2)
			break

			case 4:
				triangle(figuras[i].x1, figuras[i].y1, figuras[i].x2, figuras[i].y2, figuras[i].x3, figuras[i].y3)
			break
		}
	}
}

function mousePressed()
{
	if(mouseY>=0)
	{
		switch(figuraElegida)
		{
			case 1:
				switch(puntoMarcado)
				{
					case 0:
						X1=mouseX
						Y1=mouseY
						puntoMarcado=1
					break

					case 1:
						let figura={
							x1: X1,
							y1: Y1,
							x2: mouseX,
							y2: mouseY,
							color: document.getElementById("colorElegido").value,
							tipoFigura: figuraElegida,
						}

						figuras.push(figura)
						puntoMarcado=0
					break
				}
			break
				
			case 2:
				switch(puntoMarcado)
				{
					case 0:
						X1=mouseX
						Y1=mouseY
						puntoMarcado=1
					break

					case 1:
						let r=mouseX-X1

						if(X1>mouseX)
							r=X1-mouseX

						let figura={
							x1: X1,
							y1: Y1,
							radio: r,
							color: document.getElementById("colorElegido").value,
							tipoFigura: figuraElegida,
						}

						figuras.push(figura)
						puntoMarcado=0
					break
				}
			break

			case 3:
				switch(puntoMarcado)
				{
					case 0:
						X1=mouseX
						Y1=mouseY
						puntoMarcado=1
					break

					case 1:
						let figura={
							x1: X1,
							y1: Y1,
							x2: mouseX,
							y2: mouseY,
							color: document.getElementById("colorElegido").value,
							tipoFigura: figuraElegida,
						}

						figuras.push(figura)
						puntoMarcado=0
					break
				}
			break

			case 4:
				switch(puntoMarcado)
				{
					case 0:
						X1=mouseX
						Y1=mouseY
						puntoMarcado=1
					break

					case 1:
						X2=mouseX
						Y2=mouseY
						puntoMarcado=2
					break

					case 2:
						let figura={
							x1: X1,
							y1: Y1,
							x2: X2,
							y2: Y2,
							x3: mouseX,
							y3: mouseY,
							color: document.getElementById("colorElegido").value,
							tipoFigura: figuraElegida,
						}

						figuras.push(figura)
						puntoMarcado=0
					break
				}
			break
		}
	}
}

function drawRect(x0, y0, x1, y1)
{
	let	y
	let m=(y1-y0)/(x1-x0)
	let b=y0-m*x0

	if(x0<x1)
	{
		for(let x=x0; x<x1; x++)
		{
			y=m*x+b
			point(x, y)	
		}
	}
	else
	{
		if(x0==x1)
		{
			if(y0<y1)
			{
				x=x0
				for(y=y0; y<y1; y++)
				{
					point(x, y)	
				}
			}
			else
			{
				x=x1
				for(y=y1; y<y0; y++)
				{
					point(x, y)	
				}
			}
		}
		else
		{
			for(let x=x1; x<x0; x++)
			{
				y=m*x+b
				point(x, y)	
			}
		}
	}
}

function drawCircle(xc, yc , r)
{
	let x=0
	let y=r
	let p=5/4-r
	
	point(xc, yc)

	while(x<y)
	{
		x = x + 1
	    
	    if (p < 0)
	    	p = p + 2*x + 1
	    else 
	    {
	    	y = y - 1
	    	p = p + 2*(x - y) + 1
	    }

    	point(xc + x, yc + y)
    	point(xc + y , yc + x)

    	point(xc + y, yc - x)
    	point(xc + x,yc - y)

    	point(xc - x, yc - y)
    	point(xc - y, yc - x)

    	point(xc - y,yc + x)
    	point(xc - x,yc + y)
	}
}

function definirFigura(tipo)
{
	puntoMarcado=0

	switch(tipo)
	{
		case 1:
			figuraElegida=1
			document.getElementById("figuraTxt").value="Cuadrado";
		break
			
		case 2:
			figuraElegida=2
			document.getElementById("figuraTxt").value="Circulo";
		break

		case 3:
			figuraElegida=3
			document.getElementById("figuraTxt").value="Recta";
		break

		case 4:
			figuraElegida=4
			document.getElementById("figuraTxt").value="Triangulo";
		break
	}
}