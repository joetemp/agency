    var s = Snap("#mysvg")

    var edgeG = s.gradient("L(0, 0, 0, 100)#68696e-#47484b");

    var edge = s.rect(0,0,100,203.7,14.64); 

    edge.attr({
        class: "edge"
    });

    var face = s.rect(1.5,1.5,97,200.85,13.32,13.32);

    face.attr({
        fill: "#000",
        stroke: "none",
        strokeWidth: 0.25
    });

    var glare = s.rect(2.713, 3.1, 94.575, 197.5, 12.096)

    glare.attr({
        fill: "none",
        stroke: "#f33",
        strokeWidth: 0.25
    });

    var horizontalFade = s.rect(2.713, 42.8, 94.575, 118.01)

    horizontalFade.attr({
        fill: "none",
        stroke: "#f33",
        strokeWidth: 0.25
    });

    var verticalFade = s.rect(2.713, 3.1, 94.575, 197.5, 12.096)

    verticalFade.attr({
        fill: "none",
        stroke: "#f33",
        strokeWidth: 0.25
    });

    var bezel = s.rect(3.90, 4.67, 92.21, 194.37, 11.46) 

    bezel.attr({
        fill: "none",
        stroke: "#f33",
        strokeWidth: 0.25
    });

    var display = s.rect(6.2, 23.8, 87.6, 156.4);

    display.attr({
        fill: "none",
        stroke: "#f33",
        strokeWidth: 0.25
    });

    var buttonInner = s.circle(50, 190.85, 5.8);

    buttonInner.attr({
        fill: "none",
        stroke: "#f33",
        strokeWidth: 0.25
    });

    var buttonOuter = s.circle(50, 190.85, 6.6);
    
    buttonOuter.attr({
        fill: "none",
        stroke: "#f33",
        strokeWidth: 0.25
    });

    var cameraOuter = s.circle(36.125, 12.5, 1.7);

    cameraOuter.attr({
        fill: "none",
        stroke: "#f33",
        strokeWidth: 0.25
    });

    var cameraInner = s.circle(36.125, 12.5, 1);

    cameraInner.attr({
        fill: "none",
        stroke: "#f33",
        strokeWidth: 0.25
    });

    var speaker = s.rect(43.375, 12, 13.25, 1.25, 0.75);

    speaker.attr({
        fill: "none",
        stroke: "#f33",
        strokeWidth: 0.25
    });