
import * as THREE from './three.module.js';
import { GLTFLoader } from './GLTFLoader.js';
import { RoomEnvironment } from './RoomEnvironment.js';
import { GUI } from './lil-gui.module.min.js';

let camera, scene, renderer;
let max_stages = 30;
var stages_count = 10;
var lift, left_door, right_door, stages, lift_do = "stop", doors_do = "stop", stage_status=true;
var COMPORTs = {};
var ComboBoxCOM;
var current_call_stage = 0;



var timer_stay_counter = 0;
var stages_out_calls = [];
var stages_in_calls = [];

var buttons_out_call = [];
var buttons_in_call = [];
var buttons_panel, cancel_out_button, cancel_in_button, close_in_button, open_in_button;
var PanelParams;
init();
animate();

function init() {


	const container = document.createElement('div');
	document.body.appendChild(container);

	camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.5, 30);
	camera.position.set(5, 5.1, 10);
	camera.rotation.set(0, 0.5, 0);

	scene = new THREE.Scene();

	const directionalLight = new THREE.DirectionalLight(0xffffff, 0.1);
	scene.add(directionalLight);

	// model

	new GLTFLoader().load('bot.gltf', function (gltf) {

		var bot = gltf.scene;
		scene.add(bot);


	});

	new GLTFLoader().load('lift.gltf', function (gltf) {

		lift = gltf.scene;
		scene.add(lift);
	});

	// 1
	new GLTFLoader().load('stage.gltf', function (gltf) {

		stages = gltf.scene;
		scene.add(stages);
	});
	//2
	new GLTFLoader().load('stage.gltf', function (gltf) {

		stages = gltf.scene;
		stages.position.y += 5.1 * 2 - 5.1;
		scene.add(stages);
	});
	//3
	new GLTFLoader().load('stage.gltf', function (gltf) {

		stages = gltf.scene;
		stages.position.y += 5.1 * 3 - 5.1;
		scene.add(stages);
	});
	//4
	new GLTFLoader().load('stage.gltf', function (gltf) {

		stages = gltf.scene;
		stages.position.y += 5.1 * 4 - 5.1;
		scene.add(stages);
	});
	//5
	new GLTFLoader().load('stage.gltf', function (gltf) {

		stages = gltf.scene;
		stages.position.y += 5.1 * 5 - 5.1;
		scene.add(stages);
	});
	//6
	new GLTFLoader().load('stage.gltf', function (gltf) {

		stages = gltf.scene;
		stages.position.y += 5.1 * 6 - 5.1;
		scene.add(stages);
	});
	//7
	new GLTFLoader().load('stage.gltf', function (gltf) {

		stages = gltf.scene;
		stages.position.y += 5.1 * 7 - 5.1;
		scene.add(stages);
	});
	//8
	new GLTFLoader().load('stage.gltf', function (gltf) {

		stages = gltf.scene;
		stages.position.y += 5.1 * 8 - 5.1;
		scene.add(stages);
	});
	//9
	new GLTFLoader().load('stage.gltf', function (gltf) {

		stages = gltf.scene;
		stages.position.y += 5.1 * 9 - 5.1;
		scene.add(stages);
	});
	//10
	new GLTFLoader().load('stage.gltf', function (gltf) {

		stages = gltf.scene;
		stages.position.y += 5.1 * 10 - 5.1;
		scene.add(stages);
	});
	//11
	new GLTFLoader().load('stage.gltf', function (gltf) {

		stages = gltf.scene;
		stages.position.y += 5.1 * 11 - 5.1;
		scene.add(stages);
	});
	//12
	new GLTFLoader().load('stage.gltf', function (gltf) {

		stages = gltf.scene;
		stages.position.y += 5.1 * 12 - 5.1;
		scene.add(stages);
	});
	//13
	new GLTFLoader().load('stage.gltf', function (gltf) {

		stages = gltf.scene;
		stages.position.y += 5.1 * 13 - 5.1;
		scene.add(stages);
	});
	//14
	new GLTFLoader().load('stage.gltf', function (gltf) {

		stages = gltf.scene;
		stages.position.y += 5.1 * 14 - 5.1;
		scene.add(stages);
	});
	//15
	new GLTFLoader().load('stage.gltf', function (gltf) {

		stages = gltf.scene;
		stages.position.y += 5.1 * 15 - 5.1;
		scene.add(stages);
	});
	//16
	new GLTFLoader().load('stage.gltf', function (gltf) {

		stages = gltf.scene;
		stages.position.y += 5.1 * 16 - 5.1;
		scene.add(stages);
	});
	//17
	new GLTFLoader().load('stage.gltf', function (gltf) {

		stages = gltf.scene;
		stages.position.y += 5.1 * 17 - 5.1;
		scene.add(stages);
	});
	//18
	new GLTFLoader().load('stage.gltf', function (gltf) {

		stages = gltf.scene;
		stages.position.y += 5.1 * 18 - 5.1;
		scene.add(stages);
	});
	//19
	new GLTFLoader().load('stage.gltf', function (gltf) {

		stages = gltf.scene;
		stages.position.y += 5.1 * 19 - 5.1;
		scene.add(stages);
	});
	//20
	new GLTFLoader().load('stage.gltf', function (gltf) {

		stages = gltf.scene;
		stages.position.y += 5.1 * 20 - 5.1;
		scene.add(stages);
	});
	//21
	new GLTFLoader().load('stage.gltf', function (gltf) {

		stages = gltf.scene;
		stages.position.y += 5.1 * 21 - 5.1;
		scene.add(stages);
	});
	//22
	new GLTFLoader().load('stage.gltf', function (gltf) {

		stages = gltf.scene;
		stages.position.y += 5.1 * 22 - 5.1;
		scene.add(stages);
	});
	//23
	new GLTFLoader().load('stage.gltf', function (gltf) {

		stages = gltf.scene;
		stages.position.y += 5.1 * 23 - 5.1;
		scene.add(stages);
	});
	//24
	new GLTFLoader().load('stage.gltf', function (gltf) {

		stages = gltf.scene;
		stages.position.y += 5.1 * 24 - 5.1;
		scene.add(stages);
	});
	//25
	new GLTFLoader().load('stage.gltf', function (gltf) {

		stages = gltf.scene;
		stages.position.y += 5.1 * 25 - 5.1;
		scene.add(stages);
	});
	//26
	new GLTFLoader().load('stage.gltf', function (gltf) {

		stages = gltf.scene;
		stages.position.y += 5.1 * 26 - 5.1;
		scene.add(stages);
	});
	//27
	new GLTFLoader().load('stage.gltf', function (gltf) {

		stages = gltf.scene;
		stages.position.y += 5.1 * 27 - 5.1;
		scene.add(stages);
	});
	//28
	new GLTFLoader().load('stage.gltf', function (gltf) {

		stages = gltf.scene;
		stages.position.y += 5.1 * 28 - 5.1;
		scene.add(stages);
	});
	//29
	new GLTFLoader().load('stage.gltf', function (gltf) {

		stages = gltf.scene;
		stages.position.y += 5.1 * 29 - 5.1;
		scene.add(stages);
	});
	//30
	new GLTFLoader().load('stage.gltf', function (gltf) {

		stages = gltf.scene;
		stages.position.y += 5.1 * 30 - 5.1;
		scene.add(stages);
	});

	new GLTFLoader().load('right_door.gltf', function (gltf) {

		right_door = gltf.scene;
		scene.add(right_door);
	});

	new GLTFLoader().load('left_door.gltf', function (gltf) {

		left_door = gltf.scene;
		scene.add(left_door);
	});



	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.toneMapping = THREE.ACESFilmicToneMapping;
	renderer.toneMappingExposure = 1;
	renderer.outputEncoding = THREE.sRGBEncoding;
	container.appendChild(renderer.domElement);

	const environment = new RoomEnvironment();
	const pmremGenerator = new THREE.PMREMGenerator(renderer);

	scene.environment = pmremGenerator.fromScene(environment).texture;

	window.addEventListener('resize', onWindowResize);

	createPanel();
	createCallPanel();
	updateCallPanel();
}

function createCallPanel() {
	buttons_panel = document.createElement('div');
	buttons_panel.className = "sidenav";
	document.body.appendChild(buttons_panel);
}



function updateCallPanel() {
	// Внешние
	buttons_panel.innerHTML = "<a>Внешние вызовы</a>";
	for (let i = 1; i < stages_count + 1; i++) {
		buttons_out_call[i] = document.createElement('button');
		buttons_out_call[i].className = "disable";
		buttons_out_call[i].innerHTML = i;
		buttons_out_call[i].onclick = function () {
			panelCallOut(i);
			buttons_out_call[i].className = "active";
		}
		buttons_panel.append(buttons_out_call[i]);
	}
	let br = document.createElement('br');
	let br2 = document.createElement('br');
	buttons_panel.append(br);
	buttons_panel.append(br2);
	cancel_out_button = document.createElement('button');
	cancel_out_button.innerHTML = "Отмена";
	cancel_out_button.className = "big-button";
	cancel_out_button.onclick = function () {
		panelCallOutCancel();
		for (let i = 1; i < stages_count + 1; i++) {
			buttons_out_call[i].className = "disable";
		}
	}
	buttons_panel.append(cancel_out_button);
	
	// Внутренние
	let br3 = document.createElement('br');
	let br4 = document.createElement('br');
	buttons_panel.append(br3);
	buttons_panel.append(br4);
	var label_inpanel = document.createElement('a');
	label_inpanel.innerHTML = "Внутренние вызовы";
	buttons_panel.append(label_inpanel);
	for (let i = 1; i < stages_count + 1; i++) {
		buttons_in_call[i] = document.createElement('button');
		buttons_in_call[i].className = "disable";
		buttons_in_call[i].innerHTML = i;
		buttons_in_call[i].onclick = function () {
			panelCallIn(i);
			buttons_in_call[i].className = "active";
		}
		buttons_panel.append(buttons_in_call[i]);
	}
	let br5 = document.createElement('br');
	let br6 = document.createElement('br');
	buttons_panel.append(br5);
	buttons_panel.append(br6);
	cancel_in_button = document.createElement('button');
	cancel_in_button.innerHTML = "Отмена";
	cancel_in_button.className = "big-button";
	cancel_in_button.onclick = function () {
		panelCallInCancel();
		for (let i = 1; i < stages_count + 1; i++) {
			buttons_in_call[i].className = "disable";
		}
	}
	buttons_panel.append(cancel_in_button);
	open_in_button = document.createElement('button'); 
	open_in_button.innerHTML = "< >";
	close_in_button = document.createElement('button'); 
	close_in_button.innerHTML = "> <";
	buttons_panel.append(open_in_button);
	buttons_panel.append(close_in_button);
}



function createPanel() {
	const gui = new GUI();
	gui.title('Конфигуратор лифта');

	PanelParams = {
		'Обновить список COM': function () {
			//alert("Update"); 
			COMPORTs = ['COM54', 'COM2'];			
			ComboBoxCOM.destroy()
			ComboBoxCOM = folderCOMPORT.add(PanelParams, 'COM PORT', COMPORTs);
		},
		'Подключиться к COM PORT': function () {
			if (ComboBoxCOM.getValue() != "Выберите COM Port") {
				// Подключение к плате
				eel.connectSerial(ComboBoxCOM.getValue());
			}
			else {
				alert("Error: Выберите COM Port.");				
			}

		},
		'Остановить лифт': function () { lift_do = "stop"; },
		'Остановить двери': function () { doors_do = "stop"; },
		'Открыть двери': function () { doors_do = "open"; },
		'Закрыть двери': function () { doors_do = "close"; },
		'Лифт &#8593;': function () { lift_do = "up"; },
		'Лифт &#8595;': function () { lift_do = "down"; },
		'Количество этажей': 10,
		'ElevatorPosition': 1,
		'CAMERA X': 5.1,
		'CAMERA Y': 0,
		'CAMERA Z': 10,
		'COM PORT': "Выберите COM Port"
	};

	const folderCOMPORT = gui.addFolder('COM PORT');

	folderCOMPORT.add(PanelParams, 'Обновить список COM');
	folderCOMPORT.add(PanelParams, 'Подключиться к COM PORT');
	ComboBoxCOM = folderCOMPORT.add(PanelParams, 'COM PORT', COMPORTs);

	const folderCamera = gui.addFolder('Camera');

	folderCamera.add(PanelParams, 'CAMERA X', 0, 10).listen().onChange(function (weight) {
		camera.position.x = weight;
	});;

	folderCamera.add(PanelParams, 'CAMERA Y', -10, 10).listen().onChange(function (weight) {
		camera.position.y = 5.1 + lift.position.y + weight;
	});;

	folderCamera.add(PanelParams, 'CAMERA Z', 0, 10).listen().onChange(function (weight) {
		camera.position.z = weight;
	});;
	
	
	const folderElevatorConfig = gui.addFolder('Конфигурация лифта');

	folderElevatorConfig.add(PanelParams, 'Количество этажей', 2, max_stages, 1).listen().onChange(function (weight) {
		;
		stages_count = weight;
		right_door.position.y = 0;
		left_door.position.y = 0;
		camera.position.y -= lift.position.y;
		lift.position.y = 0;
		current_call_stage = 0;
		lift_do = "stop";
		doors_do = "closed";
		left_door.position.x = 0;
		right_door.position.x = 0;
		updateCallPanel();
	});;

	const folderElevator = gui.addFolder('Симуляция лифта');

	folderElevator.add(PanelParams, 'ElevatorPosition', 1, max_stages).listen().disable();


	folderElevator.add(PanelParams, 'Остановить лифт');
	folderElevator.add(PanelParams, 'Лифт &#8593;');
	folderElevator.add(PanelParams, 'Лифт &#8595;');
	folderElevator.add(PanelParams, 'Остановить двери');
	folderElevator.add(PanelParams, 'Открыть двери');
	folderElevator.add(PanelParams, 'Закрыть двери');


	folderCamera.close();
	folderElevator.close();
	folderElevatorConfig.close();
	folderCOMPORT.close();
}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize(window.innerWidth, window.innerHeight);

}

//

function animate() {

	requestAnimationFrame(animate);

	PanelParams.ElevatorPosition = (5.1 + lift.position.y) / 5.1;
	//controls.update(); // required if damping enabled
	switch (lift_do) {
		case "up":
			if (((5.1 + lift.position.y) / 5.1) < (stages_count+0.1)) {
				lift.position.y += 0.02;
				right_door.position.y += 0.02;
				left_door.position.y += 0.02;
				camera.position.y += 0.02;	
			}
			else {
				lift_do = "stop";
			}			
			break;
		case "down":
			if (lift.position.y > -2.5) {
				lift.position.y -= 0.02;
				right_door.position.y -= 0.02;
				left_door.position.y -= 0.02;
				camera.position.y -= 0.02;
			}
			else
			{
				lift_do = "stop";
			}
			break;

		default:

			break;
	}

	switch (doors_do) {
		case "open":
			if (right_door.position.x > 0.7) {
				doors_do = "opened";
			}
			else {
				left_door.position.x -= 0.01;
				right_door.position.x += 0.01;
			}

			break;
		case "close":
			if (right_door.position.x < 0.01) {

				doors_do = "closed";
			}
			else {
				left_door.position.x += 0.01;
				right_door.position.x -= 0.01;
			}
			break;

		default:

			break;
	}

	liftLogic();

	render();

}

function liftLogic() {
	if (current_call_stage != 0) {
		stage_status = false;
		if (current_call_stage > (5.1 + lift.position.y) / 5.1) {
			lift_do = "up";
			if ((5.12 + lift.position.y) / 5.1 > current_call_stage) {
				current_call_stage = 0;
				lift_do = "stop";
				stage_status = true;
			}
		}
		else {
			lift_do = "down";
			if ((5.08 + lift.position.y) / 5.1 < current_call_stage) {
				current_call_stage = 0;
				lift_do = "stop";
				stage_status = true;
			}
		}
	}


}

function panelCallIn(number) {
	var duplicate = false;
	stages_in_calls.forEach(function (item, index, array) {
		if (number == item) {
			duplicate = true;
		};
	});
	if (!duplicate) {
		stages_in_calls.push(number);
	}
	console.log("Вызовы кабины: "+stages_in_calls)
}

function panelCallOut(number) {
	current_call_stage = number;
	var duplicate = false;
	stages_out_calls.forEach(function (item, index, array) {
		if (number == item) {
			duplicate = true;
		};
	});
	if (!duplicate) {
		stages_out_calls.push(number);
	}
}

function panelCallOutCancel() {
	current_call_stage = 0;
	lift_do = "stop";
}

function panelCallInCancel() {
	current_call_stage = 0;
	lift_do = "stop";
}

function render() {
	renderer.render(scene, camera);
}
