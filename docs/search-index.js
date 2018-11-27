var N = null;var searchIndex = {};
searchIndex["carambolage"]={"doc":"","items":[[5,"main","carambolage","",N,[[]]],[5,"get_options","","",N,[[],["options"]]],[5,"match_options","","",N,[[["matches"]],["gamesettings"]]],[0,"game","","Core application logic.",N,N],[3,"Game","carambolage::game","",N,N],[12,"glfw","","",0,N],[12,"window","","",0,N],[12,"events","","",0,N],[12,"frame_limiter","","",0,N],[12,"screen","","",0,N],[12,"settings","","",0,N],[12,"scene","","",0,N],[12,"controller","","",0,N],[3,"GameSettings","","",N,N],[12,"is_fullscreen","","",1,N],[12,"width","","",1,N],[12,"height","","",1,N],[12,"map","","",1,N],[12,"fps","","",1,N],[5,"error_callback","","",N,[[["error"],["string"],["cell"]]]],[0,"car","","GameObject, currently only a car.",N,N],[3,"Car","carambolage::game::car","A GameObject controlled by a player.",N,N],[12,"position","","",2,N],[12,"rotation","","",2,N],[12,"_velocity","","",2,N],[12,"_force","","",2,N],[12,"_mass","","",2,N],[12,"boost","","",2,N],[12,"model","","",2,N],[12,"cuboid","","",2,N],[11,"new","","Create a new `Car`.",2,[[["str"],["str"],["vector3",["f32"]],["f32"]],["car"]]],[11,"update","","Update the car position and velocity based on the internal car state for a given time step.",2,[[["self"],["f32"],["option",["controller"]]]]],[11,"draw","","Draw the car to the currently bound framebuffer.",2,[[["self"],["matrix4"],["matrix4"]]]],[11,"model_from_id","","Return a `Car` file name from an id.",2,[[["u32"]],["string"]]],[11,"color_from_id","","Return a `Car` color palette file name from an id.",2,[[["u32"]],["string"]]],[0,"controller","carambolage::game","User input handling.",N,N],[3,"ControllerInternal","carambolage::game::controller","",N,N],[12,"forward","","",3,N],[12,"is_forward","","",3,N],[12,"backward","","",3,N],[12,"is_backward","","",3,N],[12,"left","","",3,N],[12,"is_left","","",3,N],[12,"right","","",3,N],[12,"is_right","","",3,N],[12,"boost","","",3,N],[12,"is_boost","","",3,N],[3,"Controller","","Prototype controller emulation for keyboard users.",N,N],[12,"is_smooth","","Internal settings and flags.",4,N],[12,"ci","","",4,N],[12,"axis_goal","","",4,N],[12,"axis","","Buttons and input axis that can be used in the game.",4,N],[12,"boost","","",4,N],[4,"ControllerLayout","","Control with WASD or arrow keys.",N,N],[13,"WASD","","",5,N],[13,"Arrows","","",5,N],[11,"fmt","","",5,[[["self"],["formatter"]],["result"]]],[11,"clone","","",3,[[["self"]],["controllerinternal"]]],[11,"fmt","","",3,[[["self"],["formatter"]],["result"]]],[11,"new","","",3,[[["controllerlayout"]],["controllerinternal"]]],[11,"default","","",3,[[],["controllerinternal"]]],[11,"clone","","",4,[[["self"]],["controller"]]],[11,"fmt","","",4,[[["self"],["formatter"]],["result"]]],[11,"new","","Create a new controller. You can activate smooth axis interpolation for up, left, down, right by setting `smooth`to true.",4,[[["bool"],["controllerlayout"]],["controller"]]],[11,"process_input","","Process input keys for this controller.",4,[[["self"],["window"],["f32"]]]],[11,"get_x_axis","","Return the x axis value, clamped between [-1.0f32; 1.0f32].",4,[[["self"]],["f32"]]],[11,"get_y_axis","","Return the y axis value, clamped between [-1.0f32; 1.0f32].",4,[[["self"]],["f32"]]],[11,"get_boost","","Return true if the boost button is pressed.",4,[[["self"]],["bool"]]],[11,"set_x_axis","","Sets the x axis value to make `process_input` better readable.",4,[[["self"],["f32"]]]],[11,"set_y_axis","","Sets the y axis value to make `process_input` better readable.",4,[[["self"],["f32"]]]],[0,"level","carambolage::game","Environment of a `Scene`.",N,N],[3,"Level","carambolage::game::level","Environment of a `Scene`.",N,N],[12,"model","","Racetrack model",6,N],[12,"matrix","","Identity matrix for model rendering.",6,N],[12,"ground","","A simple box collider for the ground.",6,N],[12,"border","","Racetrack border collider. Keep this mesh as simple as possible.",6,N],[11,"new","","Load a model from raw model files.",6,[[["str"]],["level"]]],[11,"load_collider","","Load the collider mesh from an obj file.",6,N],[11,"draw","","Render the environment to the bound framebuffer.",6,[[["self"],["matrix4"],["matrix4"]]]],[0,"scene","carambolage::game","Actual runtime data.",N,N],[3,"Scene","carambolage::game::scene","Main application Scene.",N,N],[12,"cars","","",7,N],[12,"level","","",7,N],[12,"camera","","",7,N],[11,"new","","Create a new scene. Choose a map via id.",7,[[["u32"]],["scene"]]],[11,"update","","Update the scene.",7,N],[11,"update_collisions","","Calculate and solve collisions.",7,[[["self"],["f32"]]]],[11,"update_scene_camera","","Calculate the position the camera should move to.",7,[[["self"],["f32"]]]],[11,"draw","","Draw the entire `Scene` to the bound framebuffer.",7,[[["self"],["matrix4"]]]],[0,"transform","carambolage::game","3D translation, rotation and scale.",N,N],[3,"Transform","carambolage::game::transform","Position, rotation and scale of an object.",N,N],[12,"needs_update","","",8,N],[12,"position","","",8,N],[12,"rotation","","",8,N],[12,"scale","","",8,N],[12,"matrix","","",8,N],[11,"new","","",8,[[],["transform"]]],[11,"set_position","","Sets the transforms position in world coordinates.",8,[[["self"],["vector3",["f32"]]]]],[11,"set_rotation","","Sets the rotation of eulerAngles in the following order: (I hope the order is right and it is in degrees not radians) - z degrees around the z axis - x degrees around the x axis - y degrees around the y axis",8,[[["self"],["vector3",["f32"]]]]],[11,"set_scale","","Sets the scale of the object for each axis.",8,[[["self"],["vector3",["f32"]]]]],[11,"position","","Sets the objects origin relative to world coordinates.",8,[[["self"]],["vector3",["f32"]]]],[11,"rotation","","Returns the rotation of eulerAngles. x: yaw y: pitch z: roll",8,[[["self"]],["vector3",["f32"]]]],[11,"scale","","Returns the scale of the object for each axis.",8,[[["self"]],["vector3",["f32"]]]],[11,"matrix","","Returns the model matrix according to scale, rotation and position of the object in world coordinates. Note: The object has to be mutable because it stores a model matrix, which will be updated in this function if some parameter has changed since the last matrix request.",8,[[["self"]],["matrix4",["f32"]]]],[6,"Event","carambolage::game","",N,N],[11,"default","","",1,[[],["gamesettings"]]],[11,"new","","",0,[[["gamesettings"]],["game"]]],[11,"run","","",0,[[["self"]]]],[11,"process_events","","",0,[[["self"]]]],[11,"process_input","","",0,[[["self"],["f32"]]]],[0,"grphx","carambolage","Graphics module of carambolage.",N,N],[0,"camera","carambolage::grphx","Camera module to calculate view matrix.",N,N],[3,"Camera","carambolage::grphx::camera","Camera to calculate the view matrix and follow ingame objects.",N,N],[12,"position","","",9,N],[12,"focus","","",9,N],[12,"up","","",9,N],[12,"height","","",9,N],[12,"height_min","","",9,N],[12,"height_max","","",9,N],[12,"speed","","",9,N],[12,"focus_goal","","",9,N],[12,"height_goal","","",9,N],[17,"_IMPL_SERIALIZE_FOR_Camera","","",N,N],[17,"_IMPL_DESERIALIZE_FOR_Camera","","",N,N],[11,"fmt","","",9,[[["self"],["formatter"]],["result"]]],[11,"clone","","",9,[[["self"]],["camera"]]],[11,"new","","Create a new `Camera` with fixed values.",9,[[],["camera"]]],[11,"update","","Update the cameras position relative to the delta time `dt`.",9,[[["self"],["f32"]]]],[11,"move_to_focus","","Smooth transition to the focus goal postion.",9,[[["self"],["vector3",["f32"]]]]],[11,"_set_focus","","Set the focus goal and the camera instantaneously.",9,[[["self"],["vector3",["f32"]]]]],[11,"move_to_height","","Smooth transition to the camera height goal.",9,[[["self"],["f32"]]]],[11,"_set_height","","Set the camera height instantaneously.",9,[[["self"],["f32"]]]],[11,"get_viewmatrix","","Get the view matrix, calculated from camera values.",9,[[["self"]],["matrix4",["f32"]]]],[0,"framebuffer","carambolage::grphx","Frame buffer for background rendering.",N,N],[3,"FrameBuffer","carambolage::grphx::framebuffer","",N,N],[12,"fbo","","",10,N],[12,"rbo","","",10,N],[12,"color_buffer","","",10,N],[12,"width","","",10,N],[12,"height","","",10,N],[11,"new","","",10,[[["i32"],["i32"]],["framebuffer"]]],[11,"init","","",10,[[["self"]]]],[11,"bind","","Bind the this `FrameBuffer` as thew current active one.",10,[[["self"]]]],[11,"unbind","","Unbind any bound `FrameBuffer` and bind the default one.",10,[[["self"]]]],[11,"resize","","Resize the buffer with a `width` and `height` in pixels.",10,[[["self"],["i32"],["i32"]]]],[11,"drop","","",10,[[["self"]]]],[11,"default","","",10,[[],["framebuffer"]]],[0,"material","carambolage::grphx","Material unused.",N,N],[3,"Material","carambolage::grphx::material","",N,N],[12,"k_a","","",11,N],[12,"k_d","","",11,N],[12,"k_s","","",11,N],[12,"d","","",11,N],[12,"t_r","","",11,N],[12,"shininess","","",11,N],[17,"_IMPL_SERIALIZE_FOR_Material","","",N,N],[17,"_IMPL_DESERIALIZE_FOR_Material","","",N,N],[11,"fmt","","",11,[[["self"],["formatter"]],["result"]]],[11,"clone","","",11,[[["self"]],["material"]]],[0,"mesh","carambolage::grphx","3D Mesh for Model",N,N],[3,"Vertex","carambolage::grphx::mesh","A single point in 3D.",N,N],[12,"position","","",12,N],[12,"normal","","",12,N],[12,"uv","","",12,N],[3,"Mesh","","Part of a 3D Model.",N,N],[12,"vertices","","",13,N],[12,"indices","","",13,N],[12,"vao","","",13,N],[12,"vbo","","",13,N],[12,"ibo","","",13,N],[17,"_IMPL_SERIALIZE_FOR_Vertex","","",N,N],[17,"_IMPL_DESERIALIZE_FOR_Vertex","","",N,N],[17,"_IMPL_SERIALIZE_FOR_Mesh","","",N,N],[17,"_IMPL_DESERIALIZE_FOR_Mesh","","",N,N],[11,"fmt","","",12,[[["self"],["formatter"]],["result"]]],[11,"clone","","",12,[[["self"]],["vertex"]]],[11,"default","","",12,[[],["vertex"]]],[11,"fmt","","",13,[[["self"],["formatter"]],["result"]]],[11,"new","","Create a new Mesh by passing  vertices and indices as parameter.",13,[[["vec",["vertex"]],["vec",["u32"]]],["mesh"]]],[11,"draw","","render the mesh",13,[[["self"]]]],[11,"init","","Generate the vertex array object and all buffers.",13,[[["self"]]]],[11,"default","","",13,[[],["mesh"]]],[11,"drop","","",13,[[["self"]]]],[0,"model","carambolage::grphx","3D Model for rendering.",N,N],[3,"Model","carambolage::grphx::model","This is the visual representation of a gameobject.",N,N],[12,"meshes","","",14,N],[12,"shader","","",14,N],[12,"texture","","",14,N],[11,"new","","Creates a new Model by passing a path to the obj file and a color palette name.",14,[[["str"],["str"]],["model"]]],[11,"draw","","This function draws the `Model`.",14,[[["self"],["matrix4"],["matrix4"],["matrix4"]]]],[11,"get_min_max","","Get the minum and maximum x-, y-, and z-coordinates of all vertices in our model.",14,N],[0,"screen","carambolage::grphx","Handle FrameBuffer blending.",N,N],[3,"Screen","carambolage::grphx::screen","Contains the `Framebuffer` and uses a shader for simple postprocessing.",N,N],[12,"vao","","",15,N],[12,"vbo","","",15,N],[12,"frame_buffer","","",15,N],[12,"post_proc_shader","","",15,N],[11,"new","","Create a new `Screen` with `width`and `height`in pixels.",15,[[["u32"],["u32"]],["screen"]]],[11,"resize","","Takes the width and height in pixels for resizing the frame buffer.",15,[[["self"],["u32"],["u32"]]]],[11,"first_step","","First step to render our scene.",15,[[["self"]]]],[11,"second_step","","Secent step to render our scene.",15,[[["self"]]]],[11,"drop","","",15,[[["self"]]]],[0,"shader","carambolage::grphx","OpenGL shader program and usability functions.",N,N],[3,"Shader","carambolage::grphx::shader","Compiled GLSL Shader Program.",N,N],[12,"id","","",16,N],[11,"new","","",16,[[["str"]],["shader"]]],[11,"bind","","Bind the shader program.",16,[[["self"]]]],[11,"_get_uniform_location","","Return the location of the uniform by its name for the currently bound shader.",16,[[["self"],["str"]],["i32"]]],[11,"bind_texture","","Bind a `Texture` to the currently bound shader program at location `id`.",16,[[["u32"],["texture"]]]],[11,"_set_uniform_vec2","","Bind a `Vector2<f32>` to the currently boundshader program at location `id`.",16,[[["i32"],["vector2"]]]],[11,"_set_uniform_vec3","","Bind a `Vector3<f32>` to the currently boundshader program at location `id`.",16,[[["i32"],["vector3"]]]],[11,"_set_uniform_vec4","","Bind a `Vector4<f32>` to the currently boundshader program at location `id`.",16,[[["i32"],["vector4"]]]],[11,"_set_uniform_mat2","","Bind a `Matrix2<f32>` to the currently boundshader program at location `id`.",16,[[["i32"],["matrix2"]]]],[11,"_set_uniform_mat3","","Bind a `Matrix3<f32>` to the currently boundshader program at location `id`.",16,[[["i32"],["matrix3"]]]],[11,"set_uniform_mat4","","Bind a `Matrix4<f32>` to the currently bound shader program at location `id`.",16,[[["i32"],["matrix4"]]]],[11,"_set_uniform_int","","",16,[[["i32"],["i32"]]]],[11,"check_compile_errors","","",16,[[["self"],["u32"],["str"]]]],[0,"texture","carambolage::grphx","2D Texture for Models",N,N],[3,"Texture","carambolage::grphx::texture","A 2D Texture for OpenGL",N,N],[12,"id","","",17,N],[5,"load_texture","","",N,[[["str"]],["u32"]]],[11,"new","","",17,[[["str"]],["texture"]]],[11,"default","","",17,[[],["texture"]]],[11,"drop","","",17,[[["self"]]]],[0,"physx","carambolage","Physics module of carambolage.",N,N],[0,"util","","Utility modules and traits.",N,N],[0,"framelimiter","carambolage::util","",N,N],[3,"FrameLimiter","carambolage::util::framelimiter","Limits the FPS to chosen value.",N,N],[12,"time_per_frame","","",18,N],[12,"delta_time","","",18,N],[12,"dt","","",18,N],[12,"time","","",18,N],[11,"new","","Create a new FrameLimiter.",18,[[["u32"]],["framelimiter"]]],[11,"start","","Make this the very first function call of your game loop, so all calculations add to delta time. This function returns the delta time.",18,[[["self"]],["f32"]]],[11,"stop","","Make this the very last function call of your game loop.",18,[[["self"]],["bool"]]],[8,"Lerp","carambolage::util","Interpolate from a to b with a given factor. factor = 0.0 returns a factor = 1.0 returns b",N,N],[10,"lerp","","",19,[[["self"],["self"],["f32"]],["self"]]],[11,"from","carambolage::game","",0,[[["t"]],["t"]]],[11,"into","","",0,[[["self"]],["u"]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"try_into","","",0,[[["self"]],["result"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"get_type_id","","",0,[[["self"]],["typeid"]]],[11,"to_subset","","",0,[[["self"]],["option"]]],[11,"is_in_subset","","",0,[[["self"]],["bool"]]],[11,"to_subset_unchecked","","",0,[[["self"]],["ss"]]],[11,"from_subset","","",0,[[["ss"]],["sp"]]],[11,"from","","",1,[[["t"]],["t"]]],[11,"into","","",1,[[["self"]],["u"]]],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"try_into","","",1,[[["self"]],["result"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"get_type_id","","",1,[[["self"]],["typeid"]]],[11,"to_subset","","",1,[[["self"]],["option"]]],[11,"is_in_subset","","",1,[[["self"]],["bool"]]],[11,"to_subset_unchecked","","",1,[[["self"]],["ss"]]],[11,"from_subset","","",1,[[["ss"]],["sp"]]],[11,"from","carambolage::game::car","",2,[[["t"]],["t"]]],[11,"into","","",2,[[["self"]],["u"]]],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"try_into","","",2,[[["self"]],["result"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"get_type_id","","",2,[[["self"]],["typeid"]]],[11,"to_subset","","",2,[[["self"]],["option"]]],[11,"is_in_subset","","",2,[[["self"]],["bool"]]],[11,"to_subset_unchecked","","",2,[[["self"]],["ss"]]],[11,"from_subset","","",2,[[["ss"]],["sp"]]],[11,"to_owned","carambolage::game::controller","",3,[[["self"]],["t"]]],[11,"clone_into","","",3,N],[11,"from","","",3,[[["t"]],["t"]]],[11,"into","","",3,[[["self"]],["u"]]],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"try_into","","",3,[[["self"]],["result"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"get_type_id","","",3,[[["self"]],["typeid"]]],[11,"to_subset","","",3,[[["self"]],["option"]]],[11,"is_in_subset","","",3,[[["self"]],["bool"]]],[11,"to_subset_unchecked","","",3,[[["self"]],["ss"]]],[11,"from_subset","","",3,[[["ss"]],["sp"]]],[11,"to_owned","","",4,[[["self"]],["t"]]],[11,"clone_into","","",4,N],[11,"from","","",4,[[["t"]],["t"]]],[11,"into","","",4,[[["self"]],["u"]]],[11,"try_from","","",4,[[["u"]],["result"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"try_into","","",4,[[["self"]],["result"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]],[11,"get_type_id","","",4,[[["self"]],["typeid"]]],[11,"to_subset","","",4,[[["self"]],["option"]]],[11,"is_in_subset","","",4,[[["self"]],["bool"]]],[11,"to_subset_unchecked","","",4,[[["self"]],["ss"]]],[11,"from_subset","","",4,[[["ss"]],["sp"]]],[11,"from","","",5,[[["t"]],["t"]]],[11,"into","","",5,[[["self"]],["u"]]],[11,"try_from","","",5,[[["u"]],["result"]]],[11,"borrow","","",5,[[["self"]],["t"]]],[11,"try_into","","",5,[[["self"]],["result"]]],[11,"borrow_mut","","",5,[[["self"]],["t"]]],[11,"get_type_id","","",5,[[["self"]],["typeid"]]],[11,"to_subset","","",5,[[["self"]],["option"]]],[11,"is_in_subset","","",5,[[["self"]],["bool"]]],[11,"to_subset_unchecked","","",5,[[["self"]],["ss"]]],[11,"from_subset","","",5,[[["ss"]],["sp"]]],[11,"from","carambolage::game::level","",6,[[["t"]],["t"]]],[11,"into","","",6,[[["self"]],["u"]]],[11,"try_from","","",6,[[["u"]],["result"]]],[11,"borrow","","",6,[[["self"]],["t"]]],[11,"try_into","","",6,[[["self"]],["result"]]],[11,"borrow_mut","","",6,[[["self"]],["t"]]],[11,"get_type_id","","",6,[[["self"]],["typeid"]]],[11,"to_subset","","",6,[[["self"]],["option"]]],[11,"is_in_subset","","",6,[[["self"]],["bool"]]],[11,"to_subset_unchecked","","",6,[[["self"]],["ss"]]],[11,"from_subset","","",6,[[["ss"]],["sp"]]],[11,"from","carambolage::game::scene","",7,[[["t"]],["t"]]],[11,"into","","",7,[[["self"]],["u"]]],[11,"try_from","","",7,[[["u"]],["result"]]],[11,"borrow","","",7,[[["self"]],["t"]]],[11,"try_into","","",7,[[["self"]],["result"]]],[11,"borrow_mut","","",7,[[["self"]],["t"]]],[11,"get_type_id","","",7,[[["self"]],["typeid"]]],[11,"to_subset","","",7,[[["self"]],["option"]]],[11,"is_in_subset","","",7,[[["self"]],["bool"]]],[11,"to_subset_unchecked","","",7,[[["self"]],["ss"]]],[11,"from_subset","","",7,[[["ss"]],["sp"]]],[11,"from","carambolage::game::transform","",8,[[["t"]],["t"]]],[11,"into","","",8,[[["self"]],["u"]]],[11,"try_from","","",8,[[["u"]],["result"]]],[11,"borrow","","",8,[[["self"]],["t"]]],[11,"try_into","","",8,[[["self"]],["result"]]],[11,"borrow_mut","","",8,[[["self"]],["t"]]],[11,"get_type_id","","",8,[[["self"]],["typeid"]]],[11,"to_subset","","",8,[[["self"]],["option"]]],[11,"is_in_subset","","",8,[[["self"]],["bool"]]],[11,"to_subset_unchecked","","",8,[[["self"]],["ss"]]],[11,"from_subset","","",8,[[["ss"]],["sp"]]],[11,"to_owned","carambolage::grphx::camera","",9,[[["self"]],["t"]]],[11,"clone_into","","",9,N],[11,"from","","",9,[[["t"]],["t"]]],[11,"into","","",9,[[["self"]],["u"]]],[11,"try_from","","",9,[[["u"]],["result"]]],[11,"borrow","","",9,[[["self"]],["t"]]],[11,"try_into","","",9,[[["self"]],["result"]]],[11,"borrow_mut","","",9,[[["self"]],["t"]]],[11,"get_type_id","","",9,[[["self"]],["typeid"]]],[11,"to_subset","","",9,[[["self"]],["option"]]],[11,"is_in_subset","","",9,[[["self"]],["bool"]]],[11,"to_subset_unchecked","","",9,[[["self"]],["ss"]]],[11,"from_subset","","",9,[[["ss"]],["sp"]]],[11,"from","carambolage::grphx::framebuffer","",10,[[["t"]],["t"]]],[11,"into","","",10,[[["self"]],["u"]]],[11,"try_from","","",10,[[["u"]],["result"]]],[11,"borrow","","",10,[[["self"]],["t"]]],[11,"try_into","","",10,[[["self"]],["result"]]],[11,"borrow_mut","","",10,[[["self"]],["t"]]],[11,"get_type_id","","",10,[[["self"]],["typeid"]]],[11,"to_subset","","",10,[[["self"]],["option"]]],[11,"is_in_subset","","",10,[[["self"]],["bool"]]],[11,"to_subset_unchecked","","",10,[[["self"]],["ss"]]],[11,"from_subset","","",10,[[["ss"]],["sp"]]],[11,"to_owned","carambolage::grphx::material","",11,[[["self"]],["t"]]],[11,"clone_into","","",11,N],[11,"from","","",11,[[["t"]],["t"]]],[11,"into","","",11,[[["self"]],["u"]]],[11,"try_from","","",11,[[["u"]],["result"]]],[11,"borrow","","",11,[[["self"]],["t"]]],[11,"try_into","","",11,[[["self"]],["result"]]],[11,"borrow_mut","","",11,[[["self"]],["t"]]],[11,"get_type_id","","",11,[[["self"]],["typeid"]]],[11,"to_subset","","",11,[[["self"]],["option"]]],[11,"is_in_subset","","",11,[[["self"]],["bool"]]],[11,"to_subset_unchecked","","",11,[[["self"]],["ss"]]],[11,"from_subset","","",11,[[["ss"]],["sp"]]],[11,"to_owned","carambolage::grphx::mesh","",12,[[["self"]],["t"]]],[11,"clone_into","","",12,N],[11,"from","","",12,[[["t"]],["t"]]],[11,"into","","",12,[[["self"]],["u"]]],[11,"try_from","","",12,[[["u"]],["result"]]],[11,"borrow","","",12,[[["self"]],["t"]]],[11,"try_into","","",12,[[["self"]],["result"]]],[11,"borrow_mut","","",12,[[["self"]],["t"]]],[11,"get_type_id","","",12,[[["self"]],["typeid"]]],[11,"to_subset","","",12,[[["self"]],["option"]]],[11,"is_in_subset","","",12,[[["self"]],["bool"]]],[11,"to_subset_unchecked","","",12,[[["self"]],["ss"]]],[11,"from_subset","","",12,[[["ss"]],["sp"]]],[11,"from","","",13,[[["t"]],["t"]]],[11,"into","","",13,[[["self"]],["u"]]],[11,"try_from","","",13,[[["u"]],["result"]]],[11,"borrow","","",13,[[["self"]],["t"]]],[11,"try_into","","",13,[[["self"]],["result"]]],[11,"borrow_mut","","",13,[[["self"]],["t"]]],[11,"get_type_id","","",13,[[["self"]],["typeid"]]],[11,"to_subset","","",13,[[["self"]],["option"]]],[11,"is_in_subset","","",13,[[["self"]],["bool"]]],[11,"to_subset_unchecked","","",13,[[["self"]],["ss"]]],[11,"from_subset","","",13,[[["ss"]],["sp"]]],[11,"from","carambolage::grphx::model","",14,[[["t"]],["t"]]],[11,"into","","",14,[[["self"]],["u"]]],[11,"try_from","","",14,[[["u"]],["result"]]],[11,"borrow","","",14,[[["self"]],["t"]]],[11,"try_into","","",14,[[["self"]],["result"]]],[11,"borrow_mut","","",14,[[["self"]],["t"]]],[11,"get_type_id","","",14,[[["self"]],["typeid"]]],[11,"to_subset","","",14,[[["self"]],["option"]]],[11,"is_in_subset","","",14,[[["self"]],["bool"]]],[11,"to_subset_unchecked","","",14,[[["self"]],["ss"]]],[11,"from_subset","","",14,[[["ss"]],["sp"]]],[11,"from","carambolage::grphx::screen","",15,[[["t"]],["t"]]],[11,"into","","",15,[[["self"]],["u"]]],[11,"try_from","","",15,[[["u"]],["result"]]],[11,"borrow","","",15,[[["self"]],["t"]]],[11,"try_into","","",15,[[["self"]],["result"]]],[11,"borrow_mut","","",15,[[["self"]],["t"]]],[11,"get_type_id","","",15,[[["self"]],["typeid"]]],[11,"to_subset","","",15,[[["self"]],["option"]]],[11,"is_in_subset","","",15,[[["self"]],["bool"]]],[11,"to_subset_unchecked","","",15,[[["self"]],["ss"]]],[11,"from_subset","","",15,[[["ss"]],["sp"]]],[11,"from","carambolage::grphx::shader","",16,[[["t"]],["t"]]],[11,"into","","",16,[[["self"]],["u"]]],[11,"try_from","","",16,[[["u"]],["result"]]],[11,"borrow","","",16,[[["self"]],["t"]]],[11,"try_into","","",16,[[["self"]],["result"]]],[11,"borrow_mut","","",16,[[["self"]],["t"]]],[11,"get_type_id","","",16,[[["self"]],["typeid"]]],[11,"to_subset","","",16,[[["self"]],["option"]]],[11,"is_in_subset","","",16,[[["self"]],["bool"]]],[11,"to_subset_unchecked","","",16,[[["self"]],["ss"]]],[11,"from_subset","","",16,[[["ss"]],["sp"]]],[11,"from","carambolage::grphx::texture","",17,[[["t"]],["t"]]],[11,"into","","",17,[[["self"]],["u"]]],[11,"try_from","","",17,[[["u"]],["result"]]],[11,"borrow","","",17,[[["self"]],["t"]]],[11,"try_into","","",17,[[["self"]],["result"]]],[11,"borrow_mut","","",17,[[["self"]],["t"]]],[11,"get_type_id","","",17,[[["self"]],["typeid"]]],[11,"to_subset","","",17,[[["self"]],["option"]]],[11,"is_in_subset","","",17,[[["self"]],["bool"]]],[11,"to_subset_unchecked","","",17,[[["self"]],["ss"]]],[11,"from_subset","","",17,[[["ss"]],["sp"]]],[11,"from","carambolage::util::framelimiter","",18,[[["t"]],["t"]]],[11,"into","","",18,[[["self"]],["u"]]],[11,"try_from","","",18,[[["u"]],["result"]]],[11,"borrow","","",18,[[["self"]],["t"]]],[11,"try_into","","",18,[[["self"]],["result"]]],[11,"borrow_mut","","",18,[[["self"]],["t"]]],[11,"get_type_id","","",18,[[["self"]],["typeid"]]],[11,"to_subset","","",18,[[["self"]],["option"]]],[11,"is_in_subset","","",18,[[["self"]],["bool"]]],[11,"to_subset_unchecked","","",18,[[["self"]],["ss"]]],[11,"from_subset","","",18,[[["ss"]],["sp"]]]],"paths":[[3,"Game"],[3,"GameSettings"],[3,"Car"],[3,"ControllerInternal"],[3,"Controller"],[4,"ControllerLayout"],[3,"Level"],[3,"Scene"],[3,"Transform"],[3,"Camera"],[3,"FrameBuffer"],[3,"Material"],[3,"Vertex"],[3,"Mesh"],[3,"Model"],[3,"Screen"],[3,"Shader"],[3,"Texture"],[3,"FrameLimiter"],[8,"Lerp"]]};
initSearch(searchIndex);