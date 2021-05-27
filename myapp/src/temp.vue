--- a/ui/temp/foo.vue
+++ b/ui/temp/foo.vue
@@ -1,810 +0,0 @@
-<template>
-    <v-dialog
-        persistent
-        v-model=""
-        content-class="f-dialog f-dialog-xl l">
-        <c-component-spinner :loading-params="{ loading:  }"></c-component-spinner>
-        <v-card class="f-card">
-            <div class="f-app-details-modal py-4">
-                <div class="text-xs-center mb-4">
-                    <div class="f-dialog-title">{{ $t('') }}</div>
-                    <div class="f-dialog-subtitle">
-                        <template v-if="">
-                            <span>{{ $t('') }}</span>
-                            <span class="f-color-blue-s100 pl-1">{{  }}</span>
-                            <span>.</span><br>
-                        </template>
-                        <span v-if="false">{{ $t('') }}</span>
-                    </div>
-                </div>


-            <v-text-field
-                solo
-                :name=""
-                :rules=""
-                :type=""
-                :suffix=""
-                v-model=""
-                :disabled=""
-                :readonly=""
-                :maxlength=""
-                :append-icon=""
-                :placeholder=""
-                @change=""
-                @click:append=""
-                :class="hello-world"
-            ></v-text-field>
