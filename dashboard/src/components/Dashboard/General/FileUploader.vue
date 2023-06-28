<template>
    <div>
        <PinturaEditorModal v-bind="editorProps" :src="modalSrc" @pintura:hide="modalVisible = false"
            @pintura:show="handleModalShow()" @pintura:close="handleModalClose()" @pintura:load="handleModalLoad($event)"
            @pintura:process="handleModalProcess($event)" />
        <p v-if="modalResult">
            <img :src="modalResult" alt="" />
        </p>
    </div>
</template>
  
<script>
import imagenprueba from '../../../assets/Dashboard/Entradas/wel-es1.jpg'
// Import Vue FilePond
import vueFilePond from "vue-filepond";
import FilePondPluginFilePoster from "filepond-plugin-file-poster";
import FilePondPluginImageEditor from "@pqina/filepond-plugin-image-editor";

// Import FilePond styles
import "filepond/dist/filepond.min.css";
import "filepond-plugin-file-poster/dist/filepond-plugin-file-poster.min.css";

// vue-pintura
import {
    PinturaEditor,
    PinturaEditorModal,
    PinturaEditorOverlay,
} from "@pqina/vue-pintura";

// pintura
import {
    // editor
    createDefaultImageReader,
    createDefaultImageWriter,
    createDefaultShapePreprocessor,
    locale_en_gb,

    // plugins
    setPlugins,
    plugin_crop,
    plugin_crop_locale_en_gb,
    plugin_filter,
    plugin_filter_defaults,
    plugin_filter_locale_en_gb,
    plugin_finetune,
    plugin_finetune_defaults,
    plugin_finetune_locale_en_gb,
    plugin_annotate,
    plugin_annotate_locale_en_gb,
    markup_editor_defaults,
    markup_editor_locale_en_gb,

    // filepond
    openEditor,
    processImage,
    createDefaultImageOrienter,
    legacyDataToImageState,
} from "@pqina/pintura";

setPlugins(plugin_crop, plugin_finetune, plugin_filter, plugin_annotate);

// Create FilePond component
const FilePond = vueFilePond(
    FilePondPluginImageEditor,
    FilePondPluginFilePoster
);

export default {
    name: "App",
    components: {
        PinturaEditor,
        PinturaEditorModal,
        PinturaEditorOverlay,
        FilePond,
    },
    props:['img'],
    methods: {
        // inline
        handleInlineLoad: function (event) {
            console.log("inline load", event.detail);
        },
        handleInlineProcess: function (event) {
            console.log("inline process", event.detail);
            this.inlineResult = URL.createObjectURL(event.detail.dest);
        },

        // modal
        handleModalLoad: function (event) {
            console.log("modal load", event.detail);
        },
        handleModalShow: function () {
            console.log("modal show");
        },
        handleModalClose: function () {
            console.log("modal close");
        },
        handleModalProcess: function (event) {
            console.log("modal process", event.detail);
            this.modalResult = URL.createObjectURL(event.detail.dest);
        },

        // overlay
        handleOverlayLoad: function (event) {
            console.log("overlay load", event.detail);
        },
        handleOverlayProcess: function (event) {
            console.log("overlay process", event.detail);
            const { imageState, dest } = event.detail;
            this.overlayResult = {
                imagePreview: URL.createObjectURL(dest),
                imageState: imageState,
            };
            this.overlayVisible = false;
        },

        // filepond
        handleFilePondInit: function () {
            console.log("FilePond has initialized");
            // FilePond instance methods are available on `this.$refs.pond`
        },
    },
    data() {
        return {
            aspectRatio: undefined,
            // defaults
            editorProps: {
                imageReader: createDefaultImageReader(),
                imageWriter: createDefaultImageWriter(),
                shapePreprocessor: createDefaultShapePreprocessor(),
                ...plugin_finetune_defaults,
                ...plugin_filter_defaults,
                ...markup_editor_defaults,
                locale: {
                    ...locale_en_gb,
                    ...plugin_crop_locale_en_gb,
                    ...plugin_finetune_locale_en_gb,
                    ...plugin_filter_locale_en_gb,
                    ...plugin_annotate_locale_en_gb,
                    ...markup_editor_locale_en_gb,
                },
            },

            // modal state
            modalSrc: imagenprueba,
            modalVisible: false,
            modalResult: undefined,


            myFiles: [],
        };
    },
    
};
</script>
  
<style >
@import "../../../../node_modules/@pqina/pintura/pintura.css";

/* bright / dark mode */
.pintura-editor {
    --color-background: 255, 255, 255;
    --color-foreground: 10, 10, 10;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
    html {
        color: #fff;
        background: #111;
    }

    .pintura-editor {
        --color-background: 10, 10, 10;
        --color-foreground: 255, 255, 255;
        box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1);
    }
}

html {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

h1 {
    margin-top: 0;
}

body {
    padding: 2em;
}

img {
    max-width: 100%;
}
</style>
  