import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import stylisRTLPlugin from "stylis-plugin-rtl";

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, stylisRTLPlugin]
})

export default cacheRtl;