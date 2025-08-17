import { ConfigProvider, type ThemeConfig } from "antd";
import type { FC, ReactNode } from "react";

interface IAntdProvidersProps {
  children: ReactNode;
}

const config: ThemeConfig = {
  token: {
    colorPrimary: "#000",
  },
  components: {
    Button: {
      colorText: "#fff",
      fontSize: 16,
      fontWeight: 550,
      borderRadius: 8,
      paddingInline: "30px",
      defaultBg: "linear-gradient(270deg, #5200ff, #ba2afe)",
      defaultColor: "#fff",
      defaultHoverBg: "linear-gradient(270deg, #5200ff, #ba2afe,)",
      defaultHoverColor: "#fff",
      paddingBlock: 20,
      colorBorder: "none",
    },
    Input: {
      borderRadius: 50,
    },
  },
};

const AntdProviders: FC<IAntdProvidersProps> = ({ children }) => {
  return <ConfigProvider theme={config}>{children}</ConfigProvider>;
};

export default AntdProviders;
