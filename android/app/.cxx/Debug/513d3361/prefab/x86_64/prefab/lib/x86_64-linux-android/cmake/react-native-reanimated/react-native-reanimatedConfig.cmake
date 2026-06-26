if(NOT TARGET react-native-reanimated::reanimated)
add_library(react-native-reanimated::reanimated SHARED IMPORTED)
set_target_properties(react-native-reanimated::reanimated PROPERTIES
    IMPORTED_LOCATION "/home/jihed/Desktop/AeroBotProjects/ComintheskyMobile/node_modules/react-native-reanimated/android/build/intermediates/cxx/Debug/5e1p1h26/obj/x86_64/libreanimated.so"
    INTERFACE_INCLUDE_DIRECTORIES "/home/jihed/Desktop/AeroBotProjects/ComintheskyMobile/node_modules/react-native-reanimated/android/build/prefab-headers/reanimated"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

