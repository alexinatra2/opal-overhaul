import {ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";

export default function useQueryRef(paramName: string, defaultValue = "") {
    const {query} = useRoute();
    const router = useRouter();

    const paramValue = ref(query[paramName] ?? defaultValue);

    watch(
        () => query[paramName],
        (newVal) => {
            paramValue.value = newVal ?? defaultValue;
        },
        {immediate: true}
    );

    watch(
        paramValue,
        (newVal) => {
            router.replace({
                query: {
                    ...query,
                    [paramName]: newVal || undefined, // Remove param if empty
                },
            });
        }
    );

    return paramValue;
}
