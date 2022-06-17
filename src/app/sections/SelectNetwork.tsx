import { useTranslation } from "react-i18next"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import { capitalize } from "@mui/material"
import { useNetworkOptions, useNetworkState } from "data/wallet"
import { Grid } from "components/layout"
import { RadioGroup } from "components/form"
import { ModalButton, Mode } from "components/feedback"
import HeaderIconButton from "../components/HeaderIconButton"
import { useCustomNetworks } from "data/settings/CustomNetworks"
import { InternalLink } from "components/general"
import styles from "./MobileItem.module.scss"

const SelectNetwork = () => {
  const { t } = useTranslation()

  const [network, setNetwork] = useNetworkState()
  const networkOptions = useNetworkOptions()
  const { list } = useCustomNetworks()

  if (!networkOptions) return null

  return (
    <ModalButton
      modalType={Mode.SELECT}
      renderButton={(open) => (
        <HeaderIconButton onClick={open}>
          {capitalize(network)}
          <ArrowForwardIosIcon />
        </HeaderIconButton>
      )}
    >
      <Grid gap={0}>
        <RadioGroup
          options={networkOptions}
          value={network}
          onChange={setNetwork}
          mobileModal={true}
        />
        <div className={styles.item}>
          {list.length ? (
            <InternalLink to="/networks" chevron>
              {t("Manage networks")}
            </InternalLink>
          ) : (
            <InternalLink to="/network/new" chevron>
              {t("Add a network")}
            </InternalLink>
          )}
        </div>
      </Grid>
    </ModalButton>
  )
}

export default SelectNetwork