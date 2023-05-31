var CANVAS_WIDTH = 1080;
var CANVAS_HEIGHT = 1920;
var CANVAS_WIDTH_HALF = CANVAS_WIDTH * 0.5;
var CANVAS_HEIGHT_HALF = CANVAS_HEIGHT * 0.5;

var EDGEBOARD_X = 0;
var EDGEBOARD_Y = 200;

var FPS = 30;
var FPS_TIME = 1000 / FPS;
var DISABLE_SOUND_MOBILE = false;

var SOUNDTRACK_VOLUME_IN_GAME = 0.5;

var PRIMARY_FONT = "comfortaa";
var CUSTOM_TEXT_FONT = "Georgia"
var PRIMARY_FONT_COLOUR = "#ee590b";
var SECONDARY_FONT_COLOUR = "#000000";

var PRIMARY_FONT_COLOUR_WHITE = "#FFFFFF";

var STATE_LOADING = 0;
var STATE_MENU = 1;
var STATE_HELP = 2;
var STATE_GAME = 3;

var ON_MOUSE_DOWN = 0;
var ON_MOUSE_UP = 1;
var ON_MOUSE_OVER = 2;
var ON_MOUSE_OUT = 3;

var EDGE_LEFT = 0;
var EDGE_RIGHT = 1;
var EDGE_TOP = 2;
var EDGE_BOTTOM = 3;

var EDGE_TOP_LEFT = 0;
var EDGE_TOP_RIGHT = 1;
var EDGE_BOTTOM_LEFT = 2;
var EDGE_BOTTOM_RIGHT = 3;

var BALL_SCALE_MAX_LIMIT = 7;
var BALL_SCALE_VARIABLE_MIN = 0.2;
var SWIPE_LIMIT_MIN = 100;
var FORCE_X_LIMIT_MAX = 0.95;
var FORCE_X_LIMIT_MIN = -0.95;
var BOARD_SIDES_SIZE = 10;
var BOARD_SIDES_RADIUS = BOARD_SIDES_SIZE * 0.5;
var LAUNCH_POWER_LIMIT_MIN = 45;
var BALL_RADIUS_TOLERANCE_FACTOR = 1.05;
var PHYSICS_ITERATIONS = 2;
var BALL_SIZE = 100;
var GRAVITY_Y = 0.4;
var BOTTOM_LIMIT = 1650;
var BOARD_HOOP_Y_OFFSET = 140;
var PLAYER_LIFE_SIZE = 55;
var BALL_FORCE_MINIMUM_LIMIT = 8;
var DAMPING_VARIABLE = 0.9;
var BALL_LIMIT_FADEOUT = CANVAS_HEIGHT_HALF + BALL_SIZE;

var BOARD_MOVEMENT_HORIZONTAL = 150;
var BOARD_MOVEMENT_VERTICAL = 100;
var BOARD_MOVEMENT_DURATION = 3000; // TWEEN DURATION (IN MS)

var PARTICLE_COLOR = ["#e91300", "#f12c00", "#ff4e02", "#ff6c07", "#f82000", "#af0302"];

var NO_BONUS = 1;
var PLAYER_LIVES;
var BALL_POINTS;
var STAR_BONUS_POINTS;
var BONUS_MULTIPLIER;
var BONUS_NO_COLLISIONS;
var RANDOM_BALL_START_LIMIT;
var BOARD_HORIZONTAL_MOVEMENT_LIMIT;
var BOARD_VERTICAL_MOVEMENT_LIMIT;
var RANDOM_BONUS_OCCURRENCY;

var ENABLE_FULLSCREEN;
var ENABLE_CHECK_ORIENTATION;