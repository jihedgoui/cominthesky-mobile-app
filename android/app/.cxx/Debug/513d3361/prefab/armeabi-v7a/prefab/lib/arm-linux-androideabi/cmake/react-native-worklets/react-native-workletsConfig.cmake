if(NOT TARGET react-native-worklets::worklets)
add_library(react-native-worklets::worklets SHARED IMPORTED)
set_target_properties(react-native-worklets::worklets PROPERTIES
    IMPORTED_LOCATION "/home/jihed/Desktop/AeroBotProjects/ComintheskyMobile/node_modules/react-native-worklets/android/build/intermediates/cxx/Debug/6w3g1s48/obj/armeabi-v7a/libworklets.so"
    INTERFACE_INCLUDE_DIRECTORIES "/home/jihed/Desktop/AeroBotProjects/ComintheskyMobile/node_modules/react-native-worklets/android/build/prefab-headers/worklets"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

