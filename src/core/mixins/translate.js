import { useI18n } from "vue-i18n";
export const translate = {
    methods: {
        translate(text) {
            const { t, te } = useI18n();
            if (te(text)) {
                return t(text);
            } else {
                return text;
            }
        },
    },
};