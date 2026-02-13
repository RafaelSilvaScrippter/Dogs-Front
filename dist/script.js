import { criarConta } from "./fetchCreateCount.js";
import { fetchLogin } from "./fetchLogin.js";
import { fetchDados } from "./fetchPosts.js";
import { postUsers } from "./fetchPostsUser.js";
import { paramUser } from "./getParamUser.js";
import { getPhotoId } from "./getPhotoId.js";
import { getSession } from "./getSession.js";
import { menuMobile } from "./menuMobile.js";
menuMobile();
getSession();
getPhotoId();
fetchDados();
paramUser();
criarConta();
postUsers();
fetchLogin();
//# sourceMappingURL=script.js.map