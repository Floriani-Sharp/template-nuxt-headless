import { VueWrapper, mount } from "@vue/test-utils";
import Index from "./index.vue";

describe("LoginComponent", () => {
  it("should render Vue instance successfully", () => {
    const wrapper: VueWrapper<any> = mount(Index, {
      global: {
        stubs: ["NuxtWelcome", "font-awesome-icon"],
      },
    });
    expect(wrapper.exists()).toBe(true);
  });
});
