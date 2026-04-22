// Variables y estilos globales para la aplicación React Native adaptada del proyecto web

export const colors = {
  // Tonos oscuros del color primario
  primaryDark1: "#162032", // --clr-primary-1
  primaryDark2: "#1d4361", // --clr-primary-2
  primaryDark3: "#295c7e", // --clr-primary-3
  primaryDark4: "#3174a2", // --clr-primary-4
  // Color primario principal
  primary: "#49a6e9", // --clr-primary-5
  // Tonos claros del color primario
  primaryLight1: "#74b9ed", // --clr-primary-6
  primaryLight2: "#8cc7f0", // --clr-primary-7
  primaryLight3: "#a5d5f3", // --clr-primary-8
  primaryLight4: "#bfe2f7", // --clr-primary-9
  primaryLight5: "#ebf7ff", // --clr-primary-10
  // Gris más oscuro - usado para títulos
  grey1: "#102a42", // --clr-grey-1
  grey2: "#243a52", // --clr-grey-2
  grey3: "#324d67", // --clr-grey-3
  grey4: "#48647f", // --clr-grey-4
  // Gris usado para párrafos
  grey5: "#617d98", // --clr-grey-5
  grey6: "#829ab0", // --clr-grey-6
  grey7: "#9eb2c7", // --clr-grey-7
  grey8: "#bcccdc", // --clr-grey-8
  grey9: "#dae2ec", // --clr-grey-9
  grey10: "#f1f5f8", // --clr-grey-10
  white: "#ffffff",
  redDark: "#bb2525", // --clr-red-dark
  redLight: "#e66b6b", // --clr-red-light
  greenDark: "#25bb32", // --clr-green-dark
  greenLight: "#6be675", // --clr-green-light
  black: "#222222",
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const fontSizes = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  huge: 40,
};

export const borderRadius = {
  sm: 4,
  md: 8,
  lg: 16,
  round: 9999,
};

export const shadows = {
  light: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  }
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: colors.grey10,
    paddingHorizontal: spacing.md,
  },
  titleContainer: {
    alignItems: "center",
    marginTop: spacing.xxl,
    paddingHorizontal: spacing.lg,
  },
  title: {
    fontSize: fontSizes.xxl,
    fontWeight: "bold",
    textTransform: "capitalize",
    marginBottom: spacing.sm,
  },
  btn: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.sm,
    marginTop: spacing.lg,
  },
  btnText: {
    color: colors.white,
    fontSize: fontSizes.lg,
    textTransform: "capitalize",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: fontSizes.xl,
    marginTop: spacing.sm,
    textAlign: "center",
    fontWeight: "bold",
  },
  retryText: {
    fontSize: fontSizes.md,
    marginTop: spacing.sm,
    textAlign: "center",
    color: colors.grey5,
  },
  tourContainer: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.sm,
    marginBottom: spacing.md,
    ...shadows.light,
  },
  tourImage: {
    width: '100%',
    height: 300,
    borderTopLeftRadius: borderRadius.sm,
    borderTopRightRadius: borderRadius.sm,
    backgroundColor: '#f0f0f0',
  },
  tourFooter: {
    padding: spacing.md,
  },
  tourInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  tourName: {
    fontSize: fontSizes.lg,
    fontWeight: 'bold',
    flexShrink: 1,
    marginRight: spacing.sm,
  },
  priceContainer: {
    backgroundColor: colors.primaryLight5,
    padding: spacing.xs,
    borderRadius: borderRadius.sm,
  },
  tourPrice: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  descriptionContainer: {
    marginBottom: spacing.md,
  },
  infoText: {
    color: colors.grey5,
    lineHeight: 20,
    marginBottom: spacing.sm,
  },
  readMoreBtn: {
    color: colors.primary,
    fontWeight: 'bold',
    marginBottom: spacing.sm,
  },
  deleteBtn: {
    borderWidth: 1,
    borderColor: colors.redDark,
    borderRadius: borderRadius.sm,
    padding: spacing.sm,
    alignItems: 'center',
    marginTop: spacing.sm,
    alignSelf: 'center',
    width: 200,
  },
  deleteBtnText: {
    color: colors.redDark,
    textTransform: 'capitalize',
  },
  underline: {
    width: 100,
    height: 4,
    backgroundColor: colors.primary,
  },
  toursContainer: {
    paddingBottom: spacing.lg,
  }
};

export default styles;
