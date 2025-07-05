'use client'

import { createTheme } from '@mui/material/styles';
import { Theme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    // 基本色
    base: {
      main: '#111111',
      mainOp10: '#1111111A',
      mainOp15: '#11111126',
      mainOp20: '#11111133',
      mainOp25: '#11111140',
      mainOp30: '#1111114D',
      mainOp35: '#11111159',
      mainOp40: '#11111166',
      mainOp45: '#11111173',
      mainOp50: '#11111180',
      mainOp55: '#1111118C',
      mainOp60: '#11111199',
      mainOp65: '#111111A6',
      mainOp70: '#111111B3',
      mainOp75: '#111111BF',
      mainOp80: '#111111CC',
      mainOp85: '#111111D9',
      mainOp90: '#111111E6',
      secondary: '#d0e1ed',
      light: '#6d6d6d',
      lightest: '#e3eff7',
      disabledLight: '#F3F3F3',
      hoverFade: '#C4DDEE',
      selected: '#c3e0f4',
      alternateRow: '#f8f8f8',
    },
    white: { main: '#FFFFFF' },
    black: {
      main: '#000000',
      op80: '#000000CC',
    },
    gray: {
      main: '#909090',
      sub: '#DDDDDD',
      light: '#CBCBCB',
      lightSub: '#CCCCCC',
      op15: '#22222226',
    },
    primary: {
      main: '#327CAB', // システム共通青
      sub: '#4294C8',
      light: '#E3EFF7',
      lightOp90: 'E3EFF7E5',
      lightOp95: 'E3EFF7F2',
      dark: '#16374B',
      hovered: '#29688E',
      selected: '#195A85',
      accent: '#56ADE7',
      op04: '#327CAB0A',
      op10: '#327CAB1A',
      op15: '#327CAB26',
      op20: '#327CAB33',
      op25: '#327CAB40',
      op30: '#327CAB4D',
      op50: '#327CAB80',
      op80: '#327CABCC',
      op90: '#327CABE5',
    },
    secondary: {
      main: '#D2E4EE', // thead 背景色
    },
    // 状態色
    success: {
      main: '#15A46E',
      hovered: '#0E8558',
      accent: '#2FB880',
    },
    warning: {
       main: '#FFA037',
       hovered: '#D9822B',
      },
    error: {
      main: '#F75C46',
      light: '#F75C46',
      hovered: '#D14936',
      dark: '#D14936',
      accent: '#FF7C65',
      lightest: '#FFEBE7',
      lightestOp50: '#FFEBE780',
    },
    information: {
      main: '#0265DC',
      light: '#3892F3',
      lightest: '#E0F2FF',
      lightestOp50: '#E0F2FF80',
      accent: '#59A7F6',
    },
    natural: {
      lightest: 'F8F8F8',
    },
    text: {
      primary: '#111111', // 通常テキスト
    },
    data: {
      primaryMain: '#4294C8',
      primarySub: '#99D0F5',
      secondarySub: '#BFB397',
      tealSub: '#49CC93',
      yellowSub: '#FF95BD',
      redSub: '#FF9B88',
      blue: '#78BBFA',
    },
    divider: '#dbdbdb',
    action: {
      disabledBackground: '#E6E6E6',
      disabled: '#B1B1B1',
      hover: '#C4DDEE',
      selected: '#c3e0f4',
      focus: '#327CAB4D',
    },
    border: {
      main: '#dbdbdb',
      head: '#c4ced5',
      body: '#d6d6d6',
    },
    bg: {
      mainOp10: '#327CAB1A',
      disabled: '#E6E6E6',
      light: '#F3F8FC',
    },
    scrollbar: {
      track: '#2222220A',
      thumb: '#2222221A',
      trackSolid: '#fefefe',
      thumbSolid: '#eef5fa',
    },
    tag: {
      light: '#d4d4d4',
      dark: '#9c9c9c',
      blue: '#dfedf5',
    }
  },
  typography: {
    fontFamily: '"Meiryo UI", "Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 6,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 6,
          width: 'fit-content',
          height: 'fit-content',
          boxShadow: 'none !important',
          '&.UIS_AccountPopupMenu-logout': {
            marginTop: 8,
            '& .UIS_AccountPopupMenu-logoutText': {
              color: theme.palette.base.main,
              fontWeight: 400,
            },
          },
          '&.Alert-showButton': {
            paddingInline: 0,
          },
        }),
        containedPrimary: ({ theme }) => ({
          '&:hover': {
            backgroundColor: theme.palette.primary.hovered,
          },
        }),
        outlinedPrimary: ({ theme }) => ({
          '&:hover': {
            borderColor: theme.palette.primary.hovered,
            color: theme.palette.primary.hovered,
          },
        }),

        // containedSecondary: ({ theme }) => ({
        //   backgroundColor: theme.palette.white.main,
        //   border: '2px solid #327CAB',
        //   color: '#327CAB',
        //   '&:hover': {
        //     backgroundColor: theme.palette.white.main,
        //     borderColor: theme.palette.primary.hovered,
        //     color: theme.palette.primary.hovered,
        //   },
        // }),
        containedError: ({ theme }) => ({
          '&:hover': {
            backgroundColor: theme.palette.error.hovered,
          },
        }),
        containedSuccess: ({ theme }) => ({
          '&:hover': {
            backgroundColor: theme.palette.success.hovered,
          },
        }),
        containedWarning: ({ theme }) => ({
          color: theme.palette.white.main,
          '&:hover': {
            backgroundColor: theme.palette.warning.hovered,
          },
        }),
        sizeSmall: {
        fontSize: '10px',
        padding: '4px 12px',
        borderRadius: '100px',
        minHeight: '20px',
        },
        sizeMedium: {
          fontSize: '12px',
          padding: '4px 12px',
          borderRadius: '8px',
          minHeight: '32px',
        },
        sizeLarge: {
          fontSize: '16px',
          padding: '8px 20px',
          minHeight: '40px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.white.main,
        }),
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.primary.main,
          maxHeight: '48px',
          height: '100%',
        }),
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          paddingBlock: '4px',
          [`@media (max-width:767px)`]: {
              paddingBlock: 0,
              minHeight: 'initial',
            },
        },
      },
    },
    MuiLink: {
      defaultProps: {
          color: 'primary',
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          fontSize: '12px',
          fontWeight: 600,
        },
        ol: {
          padding: 0,
          margin: 0,
          listStyle: 'none',
        },
        li: {
          textAlign: 'start',
          '& a': {
          textDecoration: 'none',
          }
        },
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: ({ theme }) => ({
          // fill: theme.palette.primary.main,
          stroke: 'none',
          '&.Breadcrumbs-separatorIcon': {
            fontSize: '20px',
            strokeWidth: 0.1,
          },
          '&.whiteIcon': {
            fill: theme.palette.white.main
          }
        }),
        fontSizeSmall: {
          fontSize: '16px',
        },
        fontSizeMedium: {
          fontSize: '20px',
        },
        fontSizeLarge: {
          fontSize: '24px',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&.Breadcrumbs-overflowButton': {
            width: '26px',
          },
        },
      },
    },
    MuiStepper: {
      styleOverrides: {
        root: {
          // padding: '24px 0',
          // backgroundColor: 'transparent',
        },
      },
    },
    MuiStep: {
      styleOverrides: {
        root: {
          padding: '0 8px',
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        label: ({ theme }) => ({
          fontSize: '14px',
          fontWeight: 700,
          color: theme.palette.primary.main, // 未完了ステップの色
          opacity: '30%',
          // fontFamily: 'Roboto Mono, monospace',
          '&.Mui-active': {
            color: theme.palette.primary.main,
            opacity: '100%',
          },
          '&.Mui-completed': {
            color: theme.palette.action.disabled,
            opacity: '100%',
          },
        }),
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main, // 未完了ステップの色
          opacity: '30%',
          '&.Mui-active': {
            color: theme.palette.primary.main,
            opacity: '100%',
          },
          '&.Mui-completed': {
            color: theme.palette.action.disabled,
            opacity: '100%',
          },
        }),
        text: {
          transform: 'translateY(-1px)',

        }
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.white.main,
          borderRadius: 4,
          padding: '1px',
          '&.Mui-focused': {
            borderColor: theme.palette.primary.main,
            boxShadow: '0 0 0 2px rgb(24 144 255 / 0.2)',
          },
          '&.MuiInputBase-multiline textarea': {
            padding: '16.5px 14px',
          },
        }),
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: ({ theme }) => ({
          width: '100%',
          maxWidth:'500px',
          '& .MuiAutocomplete-clearIndicator': {
            backgroundColor: theme.palette.gray.main,
            '& svg': {
              fill: theme.palette.white.main,
              fontSize: '12px',
            },
          },
          '& .MuiChip-deletableColorDefault': {
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.primary.light,
            '& svg': {
              fontSize: '12px',
            },
          },
          '& .MuiChip-root .MuiChip-deleteIcon': {
            color: theme.palette.gray.main,
          },
          '& .MuiChip-root .MuiChip-deleteIcon:hover': {
            color: theme.palette.gray.main,
          },
          '& .MuiAutocomplete-inputRoot': {
            paddingBottom: '8px',
          },
          '& .MuiAutocomplete-tag': {
            margin: '1px',
          },
        }),
        listbox: ({ theme }) => ({
          margin: '0px !important',
          padding: 0,
          listStyle: 'none',
          backgroundColor: theme.palette.white.main,
          overflow: 'auto',
          maxHeight: 250,
          borderRadius: 4,
          boxShadow: '0 2px 8px rgb(0 0 0 / 0.15)',
          zIndex: 1,
          '& li': {
            padding: '5px 12px',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'start',
            '& span': {
              flexGrow: 1,
            },
          },
          "& li[aria-selected='true']": {
            backgroundColor: theme.palette.bg.light,
            fontWeight: 600,
          },
          '& li.Mui-focused': {
            backgroundColor: theme.palette.base.selected,
            cursor: 'pointer',
          },
        }),
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginRight: 20,
          marginLeft: '-6px',
          '&.Checkbox .MuiFormControlLabel-root': {
            marginRight: '16px',
          },
        },
        label: ({ theme }) => ({
          fontSize: '14px',
          color: theme.palette.base.main,
        }),
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          '&.Checkbox': {
            margin: '24px',
          },
          '&.RadioButton': {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'center',
            columnGap: '20px',
            [`@media (max-width:767px)`]: {
              flexDirection: 'column',
              rowGap: '6px',
              alignItems: 'flex-start',
            },
          },
         '&.Dropdown-container': {
            minWidth: '200px',
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          marginBottom: 4,
          fontWeight: 'bold',
          fontSize: 14,
          '&.Checkbox .MuiFormLabel-root': {
            color: theme.palette.base.main,
            fontWeight: 400,
            fontSize: '14px',
            whiteSpace: 'nowrap',
            margin: '0',
          },
          '&.RadioButtonLabel': {
            color: theme.palette.base.main,
            fontSize: '13px',
            fontWeight: 400,
            marginBottom: 0,
          },
          '&.SliderButtonLabel': {
            fontSize: '13px',
            fontWeight: 400,
            color: theme.palette.base.main,
            whiteSpace: 'nowrap',
            width: 'fit-content',
          },
          '&.FileUploadButtonLabel': {
            fontSize: '13px',
            fontWeight: 400,
            color: theme.palette.base.main,
            whiteSpace: 'nowrap',
            width: 'fit-content',
          },
        }),
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: '4px',
          '& .MuiSvgIcon-root': {
            fill: theme.palette.action.disabled,
          },
          '&.Mui-checked .MuiSvgIcon-root': {
            fill: theme.palette.primary.main,
          },
        }),
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: 6,
          color: theme.palette.action.disabled,
          '& svg': {
            fontSize: 16,
            color: theme.palette.gray.main,
          },
          '&.Mui-checked': {
            color: theme.palette.primary.main,
          },
          '&.Mui-checked svg': {
            color: theme.palette.primary.main,
          },
          '&.Mui-disabled': {
            color: theme.palette.gray.light,
          },
        }),
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
        },
        switchBase: ({ theme }) => ({
          '&.Mui-checked': {
            '& + .MuiSwitch-track': {
              backgroundColor: theme.palette.primary.main,
            },
          },
        }),
        track: ({ theme }) => ({
          backgroundColor: theme.palette.action.disabled,
        }),
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: ({ theme }) => ({
          '& .Mui-selected.MuiButtonBase-root': {
            backgroundColor: theme.palette.primary.sub,
          },
          '& .Mui-selected.MuiButtonBase-root:hover': {
            backgroundColor: theme.palette.primary.sub,
          },
        }),
        ul: {
          justifyContent: 'center',
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          borderColor: theme.palette.action.disabled,
          color: theme.palette.base.light,
          fontWeight: 700,
          '&:hover': {
            backgroundColor: theme.palette.primary.light || theme.palette.gray.light,
          },
          '&.Mui-selected': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            '&:hover': {
              backgroundColor: theme.palette.primary.dark || theme.palette.primary.main,
            },
          },
      }),
      text: ({ theme }) => ({
        color: theme.palette.base.light,
        transform: 'scale(1.3)',
        '&:hover': {
          backgroundColor: theme.palette.gray.light,
        },
      }),
      ellipsis: ({ theme }) => ({
        fontSize: '18px',
        fontWeight: '400',
        color: theme.palette.gray.main,
      }),
    },
    },
    MuiTypography: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&.rowsPerPageLabel': {
            fontSize: '12px',
            marginLeft: '8px',
          },
          '&.UIS_AccountPopupMenu-name': {
            fontWeight: 700,
            fontSize: '14px',
          },
          '&.UIS_AccountPopupMenu-meta': {
            fontSize: '10px',
          },
          '&.Headline-page': {
            fontSize: '28px',
            fontWeight: 'bold',
            textAlign: 'start',
            paddingInline: '32px',
          },
          '&.Headline-area': {
            fontSize: '18px',
            fontWeight: 'bold',
            textAlign: 'start',
            paddingInline: '32px',
          },
          '.ToggleSwitch-wrapper &': {
            fontSize: '13px',
            fontWeight: 400,
            color: theme.palette.base.main,
          },
          '&.Current-step': {
            textAlign: 'center'
          },
          '&.LinearProgress-per': {
            width: '50px',
            color: theme.palette.white.main,
          },
          '&.LinearProgress-load': {
            width: 'fit-content',
            color: theme.palette.white.main,
          },
        }),
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            boxShadow: 'none',
          },
          '&.rowsPerPageSelect': {
            paddingLeft: '16px',
            paddingTop: '4px',
            paddingBottom: '4px',
          },
          '&.DropdownSelect': {
            fontSize: '14px',
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip:  ({ theme }) => ({
          fontSize: '10px',
          padding: '2px 8px',
          backgroundColor: theme.palette.base.mainOp90,
        }),
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          marginBottom: '6px',
        },
        rail: ({ theme }) => ({
          height: 8,
          backgroundColor:  theme.palette.gray.light,
        }),
        track: ({ theme }) => ({
          height: 8,
          backgroundColor: theme.palette.primary.main,
        }),
        thumb: ({ theme }) => ({
          width: 20,
          height: 20,
          backgroundColor: theme.palette.primary.main,
        }),
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          width: '100%',
          borderCollapse: 'collapse',
          '& .MuiDataGrid-cellEmpty': {
            display: 'none',
          }
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.gray.sub,
        }),
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
        },
        head: ({ theme }) => ({
          padding: '6px',
          border: `1px solid ${theme.palette.gray.lightSub}`,
          textAlign: 'center',
          backgroundColor: theme.palette.gray.sub,
        }),
        body: ({ theme }) => ({
          padding: '6px',
          border: `1px solid ${theme.palette.gray.lightSub}`,
        }),
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          width: 'fit-content',
          border: '1px solid',
          borderColor: theme.palette.gray.lightSub,
          '& .MuiDataGrid-cell': {
            borderRight: `1px solid ${theme.palette.gray.lightSub}`,
          },
          '& .MuiDataGrid-columnHeaders': {
            borderBottom: `1px solid ${theme.palette.gray.lightSub}`,
          },
          '& .MuiDataGrid-columnHeader': {
            borderRight: `1px solid ${theme.palette.gray.lightSub}`,
            borderBottom: 'none !important',
            background: theme.palette.base.secondary,
          },
          '& .MuiDataGrid-row': {
            borderBottom: `1px solid ${theme.palette.gray.lightSub}`,
            background: theme.palette.base.alternateRow,
          },
          '& .MuiDataGrid-columnSeparator': {
            color: theme.palette.border.main,
          },
          '& .MuiChip-label': {
            lineHeight: 'normal',
          }
        }),
        row: {
          width: 'fit-content',
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          '&.Breadcrumbs-list .MuiMenuItem-root': {
            fontSize: '12px',
          }
        },
        paper: {
          width: 'fit-content',
          maxWidth: '100%',
          paddingInline: '8px',
          '&.UIS_AccountPopupMenu-dialogPaper': {
            paddingInline: 16,
            paddingBlock: 2,
            margin: 0,
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            boxShadow: '0 8px 24px #22222229',
          },
        },
      },
    },
    MuiMenuList: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&.DropdownItem': {
            fontSize: '12px',
          },
        },
        // gutters: {
        //   paddingLeft: '0px',
        // }
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          fontWeight: 'bold', // bold検討中
          '&.UIS_AccountPopupMenu-avatar': {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.main,
            width: 40,
            height: 40,
            marginInline: 'auto',
          },
          '&.UIS_AccountPopupMenu-trigger': {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.main,
            width: 24,
            height: 24,
            fontSize: '12px',
          },
      }),
      },
    },
    MuiChip: {
      styleOverrides: {
        root: ({ theme }) => ({
          height: 'fit-content',
          fontSize: '10px',
          fontWeight: '700',
          '& .MuiChip-label': {
            padding: '2px 10px',
          },
          '&.Tag-lightBlue': {
            backgroundColor: theme.palette.tag.blue,
            color: theme.palette.black.main,
          },
          '&.Tag-lightGray': {
            backgroundColor: theme.palette.tag.light,
            color: theme.palette.black.main,
          },
          '&.Tag-darkGray': {
            backgroundColor: theme.palette.tag.dark,
            color: theme.palette.white.main,
          },
          '&.UIS_AccountPopupMenu-chip': {
            fontSize: '10px',
            fontWeight: '700',
            height: 'fit-content',
          },
        }),
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          padding: '24px',
          paddingBottom: '16px',
          borderRadius: '16px',
          maxWidth: '416px',
          '&.UIS_AccountPopupMenu-dialogPaper': {
            padding: 16,
            margin: 0,
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
          },
          '& .MuiSvgIcon-root': {
            width: '32px',
            height: '32px',
          }
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          paddingTop: '0',
          paddingBottom: '4px',
          paddingLeft: '16px',
          fontSize: '14px',
          fontWeight: '700',
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          paddingBottom: '10px',
          paddingLeft: '16px',
        },
      },
    },
    MuiDialogContentText: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: '12px',
          color: theme.palette.base.main,
          lineHeight: '18px',
        }),
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: '0',
          '& .MuiButtonBase-root': {
            fontSize: '14px',
          }
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) => ({
          width: '100%',
          '& .MuiOutlinedInput-root': {
            backgroundColor: theme.palette.white.main,
            borderColor: theme.palette.border.body,
            '&.Mui-focused': {
              boxShadow: 'none',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.primary.hovered,
            },
            '&.Mui-disabled': {
              backgroundColor: theme.palette.action.disabledBackground,
              color: theme.palette.gray.main,
            },
            '&.Mui-error .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.error.hovered,
            },
          },
        }),
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(ownerState.color === 'error' && {
            border: `1px solid ${theme.palette.error.main}`,
          }),
          textAlign: 'start',
          fontSize: '10px',
          color: theme.palette.base.main,
          width: 'fit-content',
          boxShadow: `0px 16px 48px 0px ${theme.palette.base.mainOp15}`,
          '& .MuiAlert-action': {
            paddingLeft: 0,
          },
          '& .Alert-text': {
            fontSize: '10px',
            lineHeight: '16px',
          },
        }),
        message: {
          position: 'relative',
          width: '100%',
          '& .MuiButton-text': {
            position: 'absolute',
            bottom: 0,
            right: 0,
          },
          '.Alert-non-expressive &': {
            paddingBottom: '20px',
            '& .Alert-text': {
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'pre-wrap',
            },
            '& .Alert-text--collapsed': {
              WebkitLineClamp: 3,
              maxHeight: '48px',
            },
            '& .Alert-text--expanded': {
              WebkitLineClamp: 'none',
              maxHeight: 'none',
            },
          }
        },
      },
    },
    MuiAlertTitle: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          fontSize: '12px',
        },

      },
    },
    MuiBadge: {
      styleOverrides: {
        dot: ({ theme }) => ({
          border: `1px solid ${theme.palette.white.main}`,
        }),
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&.LinearProgress': {
            height: '12px',
            borderRadius: '10px',
            backgroundColor: theme.palette.white.main,

            '& .MuiLinearProgress-bar': {
              backgroundColor: theme.palette.white.main,
            },
          },
        }),
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&.CircularProgress': {
            color: theme.palette.white.main,
          },
        }),
      },
    },
    MuiSnackbar: {
      styleOverrides:{
        root: ({ theme }) => ({
            bottom: '64px !important',
            left: '32px !important',
            '@media screen and (max-width: 767px)': {
              right: '32px !important',
          },
          '& .Snackbar-inner': {
            display: 'flex',
            alignItems: 'center',
            columnGap: '16px',
          },
          '& .ProcessingSnackbar-inner': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            width: '100%',
          },
          '& .ProcessingSnackbar-linearProgress': {
            width: '100%',
            marginTop: '10px',
            height: '4px',
            borderRadius: '10px',
            backgroundColor: theme.palette.gray.lightSub,
            '& .MuiLinearProgress-bar': {
              backgroundColor: theme.palette.primary.main,
            },
          }
        }),
      },
    },
    MuiSnackbarContent: {
      styleOverrides:{
        root: {
          flexDirection: 'row',
          flexWrap: 'nowrap',
          justifyContent: 'space-between',
          '.ProcessingSnackbar &': {
            width: '462px',
          }
        },
        action: {
          marginLeft: 0,
          '& .MuiButton-root': {
            minWidth: '80px',
          }
        },
        message: {
          width: '100%',
        }
      },
    },
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        '.StatusBadge-container': {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.white.main,
          padding: '2px 6px',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          columnGap: '4px',
          fontSize: '10px',
        },
        '.tablePaginationRoot': {
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          justifyContent: 'center',
        },
        '.tablePaginationSelectContainer': {
          display: 'flex',
          alignItems: 'center',
        },

        // AccountPopupMenu
        '.UIS_AccountPopupMenu-container': {
          paddingInline: '0px',
          textAlign: 'center',
          width: 'fit-content',
          minWidth: '150px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          columnGap: '8px',
          '@media screen and (max-width: 767px)': {
            paddingLeft: '24px',
            paddingRight: '24px',
            paddingTop: 0,
            flexDirection: 'row',
          },
        },
        '.UIS_AccountPopupMenu-info': {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '10px',
          '@media screen and (max-width: 767px)': {
            alignItems: 'flex-start',
            marginTop: 0,
          },
        },
        '.UIS_AccountPopupMenu-nameRow': {
          display: 'flex',
          columnGap: '6px',
          rowGap: '6px',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          '@media screen and (max-width: 767px)': {
            flexDirection: 'row',
          },
        },
        '.UIS_AccountPopupMenu-metaRow': {
          display: 'flex',
          columnGap: '6px',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          '@media screen and (max-width: 767px)': {
            flexDirection: 'row',
          },
        },

        // Stepper
        '.Stepper-reset': {
          display: 'flex',
          justifyContent: 'flex-end',
        },
        '.Stepper-button': {
          display: 'flex',
        },

        // Checkbox
        '.Checkbox-inner': {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          columnGap: '16px',
          rowGap: '4px',
          '@media screen and (max-width: 767px)': {
            flexDirection: 'column',
            alignItems: 'flex-start',
          },
        },

        // ToggleSwitch
        '.ToggleSwitch-wrapper': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          columnGap: '8px',
        },

        // Slider
        '.Slider': {
          width: '100%',
          maxWidth: '400px',
          marginInline: 'auto',
          display: 'flex',
          columnGap: '16px',
          alignItems: 'center',
          flexDirection: 'row',
          '@media screen and (max-width: 767px)': {
            flexDirection: 'column',
            alignItems: 'flex-start',
            rowGap: '24px',
          },
        },

        // FileUpload
        '.FileUpload': {
          width: '100%',
          marginInline: 'auto',
          display: 'flex',
          columnGap: '16px',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          '@media screen and (max-width: 767px)': {
            flexDirection: 'column',
            alignItems: 'flex-start',
            rowGap: '24px',
          },
        },
        '.FileUpload-input': {
          clip: 'rect(0 0 0 0)',
          clipPath: 'inset(50%)',
          height: '8px',
          overflow: 'hidden',
          position: 'absolute',
          bottom: 0,
          left: 0,
          whiteSpace: 'nowrap',
          width: '8px',
        },

        // Table
        '.Tabel': {
          width: '100%',
          overflowX: 'auto',
        },

        // Headline
        '.Headline-container': {
          width: '100%',
        },

        // Progress
        '.Progress-container': {
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          rowGap: '32px',
          backgroundColor: 'rgba(0,0,0,0.4)',
          paddingInline: '20px',
        },
        '.Progress-container > *': {
          width: '100%',
          maxWidth: '300px',
        },
        '.LinearProgress-container': {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '.LinearProgress-textContainer': {
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        },
        '.LinearProgress-textContainer > *': {
          width: 'fit-content',
        },
        // NumberInput
        '.BaseNumberInput-root': {
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'center',
          alignItems: 'center',
        },

        // NumberInput input
        '.BaseNumberInput-input': {
          fontSize: '0.875rem',
          lineHeight: 1.375,
          background: theme.palette.white.main,
          border: `1px solid ${theme.palette.gray.lightSub}`,
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
          borderRadius: '8px',
          margin: '0 8px',
          padding: '10px 12px',
          outline: 0,
          minWidth: 0,
          width: '4rem',
          textAlign: 'center',

          '&:hover': {
            borderColor: theme.palette.primary.main,
          },
          '&:focus': {
            borderColor: theme.palette.primary.main,
          },
          '&:focus-visible': {
            outline: 0,
          },
        },

        // NumberInput button
        '.BaseNumberInput-button': {
          boxSizing: 'border-box',
          lineHeight: 1.5,
          border: `1px solid ${theme.palette.gray.sub}`,
          borderRadius: '999px',
          background: theme.palette.bg.light,
          width: '32px',
          height: '32px',
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'center',
          alignItems: 'center',
          transitionProperty: 'all',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          transitionDuration: '120ms',

          '&:hover': {
            cursor: 'pointer',
            borderColor: theme.palette.gray.main,
          },

          '&:focus-visible': {
            outline: 0,
          },
        },

        // NumberInput increment
        '.BaseNumberInput-button.increment': {
          order: 1,
        },

        // Footer
        '.Footer': {
          width: '100%',
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.common.white,
          height: '50px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'fixed',
          bottom: 0,
          zIndex: 10000,
        },
        '.Footer p': {
          color: theme.palette.common.white,
          textAlign: 'center',
          fontSize: '12px',
        },
        '.FooterLink': {
          margin: '0 auto',
          listStyle: 'none',
          display: 'flex',
          justifyContent: 'center',
          fontSize: '10px',
          padding: 0,
        },
        '.FooterLink-Item': {
          width: 'auto',
        },
        '.FooterLink li': {
          margin: '0 8px 0 0',
          padding: '0 8px 0 0',
          color: theme.palette.common.white,
          fontSize: '12px',
          position: 'relative',
        },
        '.FooterLink-Button': {
            padding: '0 !important',
            width: 'max-content',
            '&:hover': {
              backgroundColor: 'inherit !important',
            }
        },
        '.FooterLink li::after': {
          content: '""',
          width: '1px',
          height: '8px',
          backgroundColor: theme.palette.common.white,
          position: 'absolute',
          top: '6px',
          right: 0,
        },
        '.FooterLink li:last-child::after': {
          display: 'none',
        },
        '.FooterLink li a': {
          color: theme.palette.common.white,
        }
      }),
    },
  },

  customIcons: {
    base: {
      display: 'inline-block',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
    },
    sizes: {
      small: 16,
      medium: 20,
      large: 24,
    },
  },
  customIconsSun: {
    base: ({ theme }: { theme: Theme }) => ({
      display: 'inline-block',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      maskRepeat: 'no-repeat',
      maskSize: 'contain',
    }),
    sizes: {
      small: 16,
      medium: 20,
      large: 24,
    },
  },
});

export default theme;
