var b2Vec2 = Box2D.Common.Math.b2Vec2;
var b2Body = Box2D.Dynamics.b2Body;
var b2BodyDef = Box2D.Dynamics.b2BodyDef;
var b2Fixture = Box2D.Dynamics.b2Fixture;
var b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
var b2World = Box2D.Dynamics.b2World;
var b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
var b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;
var b2DebugDraw = Box2D.Dynamics.b2DebugDraw;
var b2RevoluteJointDef = Box2D.Dynamics.Joints.b2RevoluteJointDef;
var world;
var scale=30;

function init(){
    var gravity=new b2Vec2(0,9.8);
    var allowSleep=true;
    world  = new b2World(gravity,allowSleep);
}

function createFloor(){
    var boodyDef= new b2BodyDef;
    boodyDef.type=b2Body.b2_staticBody;
    boodyDef.position.x=640/2/scale;
    boodyDef.position.y=450/scale;
}




